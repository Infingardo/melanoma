// Runner dei test del motore — nessun framework.
// Esecuzione:  node tests/run.mjs   (oppure: npm test)   Exit code 0 = tutto verde.
//
// Perche' esiste: fino alla v3.10.0 tre renderer calcolavano ciascuno la propria idea
// di rischio, e il campo "CLASSE DI RISCHIO INTEGRATA" del referto usciva
// "Non calcolata" in ogni singolo caso senza che nulla lo segnalasse.
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const E = require('../engine.js');
const { computeRisk, MORPH_KEYS, MAX_RAW_FULL, MAX_RAW_PARTIAL, RED_FLAG_THRESHOLDS } = E;

let pass = 0, fail = 0; const failures = [];
const check = (n, c, d = '') => c ? pass++ : (fail++, failures.push(n + (d ? ` — ${d}` : '')));
const eq = (n, a, b) => check(n, a === b, `atteso ${JSON.stringify(b)}, ottenuto ${JSON.stringify(a)}`);
const section = t => console.log(`\n• ${t}`);

const S = o => Object.fromEntries(MORPH_KEYS.map(k => [k, o[k] || 0]));
const R = (o = {}, extra = {}) => computeRisk(Object.assign({ scores: S(o), isPartial: false, driver: '', cna: '' }, extra));
const BLANDA = {};
const RED_FLAG_TRIPLA = { maturation: 20, mitoses: 15, necrosis: 5, atypia: 10 };

// ══════════════════════════════════════════════════════════════════════════
section('indice euristico e denominatori');
{
  const max = { maturation:20, symmetry:15, circumscription:15, giant_cells:8,
                mitoses:15, infiltration:10, necrosis:5, atypia:10, ulceration:5 };
  eq('somma dei massimi = MAX_RAW_FULL', Object.values(max).reduce((a,b)=>a+b,0), MAX_RAW_FULL);
  eq('escludendo simmetria e circoscrizione = MAX_RAW_PARTIAL',
    MAX_RAW_FULL - max.symmetry - max.circumscription, MAX_RAW_PARTIAL);
  eq('lesione intera al massimo → HRI 100', R(max).hri, 100);
  eq('lesione blanda → HRI 0', R(BLANDA).hri, 0);

  // nella biopsia parziale le due voci non valutabili escono da numeratore E denominatore
  const parz = R(max, { isPartial: true });
  eq('biopsia parziale: denominatore ridotto', parz.maxRaw, MAX_RAW_PARTIAL);
  eq('biopsia parziale: simmetria azzerata', parz.scores.symmetry, 0);
  eq('biopsia parziale al massimo → HRI 100', parz.hri, 100);
  eq('biopsia parziale non gonfia il punteggio',
    R({ maturation:20 }, { isPartial:true }).hri, Math.round(20/MAX_RAW_PARTIAL*100));
}

section('red flag morfologiche');
{
  eq('soglie invariate', JSON.stringify(RED_FLAG_THRESHOLDS), JSON.stringify({ maturation:16, mitoses:12, necrosis:5 }));
  eq('maturazione 16 → red flag', R({ maturation:16 }).redFlags.length, 1);
  eq('maturazione 11 → nessuna', R({ maturation:11 }).redFlags.length, 0);
  eq('mitosi 12 → red flag', R({ mitoses:12 }).redFlags.length, 1);
  eq('mitosi 8 → nessuna', R({ mitoses:8 }).redFlags.length, 0);
  eq('necrosi 5 → red flag', R({ necrosis:5 }).redFlags.length, 1);
  eq('necrosi 3 → nessuna', R({ necrosis:3 }).redFlags.length, 0);
  eq('tre red flag insieme', R(RED_FLAG_TRIPLA).redFlags.length, 3);
}

section('le red flag raggiungono la classe integrata');
{
  // v3.11.0: prima il sommario non le riceveva e questo caso usciva "Spitz Nevus"
  const soloNecrosi = R({ necrosis:5 });
  eq('una sola red flag: HRI resta basso', soloNecrosi.hri, Math.round(5/MAX_RAW_FULL*100));
  check('ma la classe integrata non dice "Spitz Nevus"', !/Spitz Nevus/.test(soloNecrosi.integrated.label), soloNecrosi.integrated.label);
  check('dichiara la morfologia ad alto rischio', /alto rischio \(red flag\)/.test(soloNecrosi.integrated.label));
  eq('e il riquadro morfologico è rosso', soloNecrosi.morph.alertClass, 'danger');
  eq('come la classe integrata', soloNecrosi.integrated.alertClass, 'danger');

  const tripla = R(RED_FLAG_TRIPLA);
  check('tre red flag: non "Atypical Spitz Tumor"', !/^Atypical Spitz Tumor/.test(tripla.integrated.label), tripla.integrated.label);
  check('confidenza cita la genomica mancante', /genomica non disponibile/.test(tripla.integrated.confidence), tripla.integrated.confidence);
  const triplaGen = R(RED_FLAG_TRIPLA, { driver:'kinase_fusion' });
  check('con genomica non dirimente lo dice', /non dirimente/.test(triplaGen.integrated.confidence), triplaGen.integrated.confidence);

  const conTert = R(RED_FLAG_TRIPLA, { driver:'tert' });
  check('red flag + TERT → concordanza', /concordanti/.test(conTert.integrated.label), conTert.integrated.label);
  check('confidenza alta', /^Alta/.test(conTert.integrated.confidence), conTert.integrated.confidence);
  eq('nessuna discordanza segnalata', conTert.discordance, false);
}

section('discordanza morfologia/genetica');
{
  for (const [nome, extra] of [['TERT', { driver:'tert' }],
                               ['CNA multiple', { cna:'multiple_cna' }],
                               ['perdita chr 6', { cna:'chr_6_loss' }]]) {
    const r = R(BLANDA, extra);
    eq(`${nome}: discordanza rilevata`, r.discordance, true);
    check(`${nome}: la classe integrata la dichiara`, /DISCORDANZA/.test(r.integrated.label));
    // v3.11.0: prima il riquadro restava verde con "follow-up di routine"
    check(`${nome}: il riquadro non è verde`, r.morph.alertClass !== 'success', r.morph.alertClass);
    check(`${nome}: nessun "follow-up di routine" nel riquadro`, !/routine/.test(r.morph.action), r.morph.action);
    check(`${nome}: il riquadro rimanda alla classe integrata`, /integrata/.test(r.morph.action));
    check(`${nome}: il segnale molecolare è nominato`, r.molecularSignals.length > 0);
  }
  const concorde = R({ maturation:11, atypia:10, infiltration:10, symmetry:12, circumscription:12 }, { driver:'tert' });
  check('HRI ≥51 + TERT → concordante, non discordante', concorde.discordance === false && /concordante/.test(concorde.integrated.label), concorde.integrated.label);
  eq('senza dati molecolari nessuna discordanza', R(BLANDA).discordance, false);
}

section('profili a basso rischio e lineage non-Spitz');
{
  eq('HRAS + 11p su morfologia blanda', R(BLANDA, { driver:'hras', cna:'single_11p_gain' }).integrated.label,
    'Spitz Nevus (HRAS/11p low-risk profile)');
  eq('solo HRAS', R(BLANDA, { driver:'hras' }).integrated.label, 'Spitz-associated low-risk profile (HRAS-mutated)');
  eq('kinase fusion', R(BLANDA, { driver:'kinase_fusion' }).integrated.label,
    'Spitz-lineage lesion with low-risk molecular profile (kinase fusion)');
  eq('nessun dato', R(BLANDA).integrated.label, 'Spitz Nevus');
  const gnaq = R(BLANDA, { driver:'gnaq_gna11' });
  check('GNAQ esce dal recinto Spitz', /non-Spitz lineage/.test(gnaq.integrated.label));
  const gnaqAlto = R(RED_FLAG_TRIPLA, { driver:'gnaq_gna11' });
  check('GNAQ + red flag → variante ad alto rischio', /high-risk features/.test(gnaqAlto.integrated.label), gnaqAlto.integrated.label);
}

section('scala morfologica');
{
  const perHri = h => {
    // costruisce un punteggio che raggiunge circa l'HRI voluto senza toccare le red flag
    const s = { maturation:11, atypia:0, infiltration:0, symmetry:0, circumscription:0, giant_cells:0, ulceration:0 };
    let target = Math.round(h * MAX_RAW_FULL / 100) - 11;
    ['atypia','infiltration','symmetry','circumscription','giant_cells','ulceration'].forEach(k => {
      const cap = { atypia:10, infiltration:10, symmetry:15, circumscription:15, giant_cells:8, ulceration:5 }[k];
      const v = Math.max(0, Math.min(cap, target)); s[k] = v; target -= v;
    });
    return R(s);
  };
  eq('HRI 0 → BASSO', R(BLANDA).morph.level, 'basso');
  eq('HRI ~40 → INTERMEDIO', perHri(40).morph.level, 'intermedio');
  eq('HRI ~60 → INTERMEDIO-ALTO', perHri(60).morph.level, 'intermedio-alto');
  eq('HRI ~80 → ALTO', perHri(80).morph.level, 'alto');
  check('la classe morfologica non si chiama "integrata"', !/integrat/i.test(perHri(60).morph.label));
}

section('raccomandazioni: una sola fonte');
{
  const racc = r => r.recommendations.join(' | ');
  check('red flag → staging + MDT', /Discussione multidisciplinare/.test(racc(R(RED_FLAG_TRIPLA))));
  check('TERT su morfologia blanda → genomica + SNB + follow-up stretto',
    /follow-up clinico stretto/i.test(racc(R(BLANDA, { driver:'tert' }))));
  check('morfologia blanda senza segnali → routine', /routine/.test(racc(R(BLANDA))));
  check('nessuna raccomandazione di routine quando c è una red flag', !/routine/.test(racc(R({ necrosis:5 }))));
}

section('purezza e invarianti di progetto');
{
  const input = { scores: S(RED_FLAG_TRIPLA), isPartial:false, driver:'tert', cna:'multiple_cna' };
  const snap = JSON.stringify(input);
  computeRisk(input);
  eq('computeRisk non muta l input', JSON.stringify(input), snap);

  const r = R(BLANDA, { driver:'tert' });
  ['hri','redFlags','morph','integrated','recommendations','discordance'].forEach(k =>
    check(`l oggetto espone ${k}`, r[k] !== undefined));

  const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const eng  = fs.readFileSync(new URL('../engine.js', import.meta.url), 'utf8');
  const pkg  = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  check('index.html carica engine.js', /<script src="engine\.js/.test(html));
  check('il motore non tocca il DOM', !/document\.|getElementById|window\./.test(eng));
  check('versione allineata a package.json', html.includes(`engine.js?v=${pkg.version}`), pkg.version);
  check('titolo allineato', html.includes(`v${pkg.version}`), pkg.version);
  // Le invarianti guardano il CODICE, non i commenti: questi ultimi citano di
  // proposito il comportamento vecchio per spiegare perche' e' stato cambiato.
  // Solo il codice: né i commenti (che citano di proposito il comportamento vecchio)
  // né il changelog in pagina, che lo racconta all'utente.
  const blocchi = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const codice = blocchi[blocchi.length - 1].replace(/^\s*\/\/.*$/gm, '');
  // Il referto riceve il rischio: nel suo corpo non deve esserci alcuna rilettura
  // del DOM prodotto dagli altri riquadri.
  const corpoReferto = (codice.match(/function generateReport\([\s\S]*?\n\}/) || [''])[0];
  check('generateReport esiste ed è delimitato', corpoReferto.length > 200);
  check('il referto non rilegge il DOM del sommario', !/querySelector|summaryContent/.test(corpoReferto));
  check('il referto usa la classe integrata del motore', /risk\.integrated\.label/.test(corpoReferto));
  check('il referto usa le raccomandazioni del motore', /risk\.recommendations/.test(corpoReferto));
  check('nessun fallback "Non calcolata" nel codice', !/Non calcolata/.test(codice));
  check('la regola delle red flag non è duplicata in index.html', !/\['16','20'\]\.includes/.test(codice));
  check('index.html non ridefinisce computeRisk', !/function computeRisk/.test(codice));
  check('getRaccomandazione rimossa', !/function getRaccomandazione/.test(html));
}

console.log(`\n${fail === 0 ? 'OK' : 'FALLITO'} — ${pass} pass, ${fail} fail`);
if (failures.length) { console.log('\nFallimenti:'); failures.forEach(f => console.log('  ✗ ' + f)); }
process.exit(fail === 0 ? 0 : 1);
