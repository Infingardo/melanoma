// ─────────────────────────────────────────────────────────────────────────────
//  MOTORE — Spitz vs melanoma spitzoide. Logica pura, nessuna dipendenza dal DOM.
//  Estratto da index.html nella v3.11.0.
//
//  Perche' esiste: fino alla v3.10.0 tre renderer calcolavano ciascuno la propria
//  idea di rischio da input che si sovrapponevano solo in parte — il riquadro
//  morfologico vedeva la sola morfologia, il sommario vedeva morfologia e
//  molecolare ma non le red flag, il referto non vedeva nulla e provava a
//  rileggere l'HTML degli altri due con una regex. Ora computeRisk() e' l'unica
//  fonte: i renderer consumano il suo risultato, non lo ricostruiscono.
// ─────────────────────────────────────────────────────────────────────────────

const MORPH_KEYS = ['maturation','symmetry','circumscription','giant_cells',
                    'mitoses','infiltration','necrosis','atypia','ulceration'];
// Somma dei massimi delle option: 103 con la lesione intera, 73 escludendo
// simmetria e circoscrizione (15 + 15) nella biopsia parziale.
const MAX_RAW_FULL = 103;
const MAX_RAW_PARTIAL = 73;
const PARTIAL_EXCLUDED = ['symmetry','circumscription'];

// Soglie delle red flag, espresse sui valori delle option corrispondenti.
const RED_FLAG_THRESHOLDS = { maturation: 16, mitoses: 12, necrosis: 5 };
const RED_FLAG_LABELS = {
  maturation: 'Maturazione assente/invertita',
  mitoses: 'Mitosi ≥6/mm² e/o atipiche',
  necrosis: 'Necrosi "en masse"'
};

const STRONG_MOLECULAR_DRIVERS = ['tert'];
const STRONG_MOLECULAR_CNA = ['multiple_cna','chr_6_loss'];
const MOLECULAR_LABELS = {
  tert: 'mutazione del promotore di TERT',
  multiple_cna: 'CNA multiple',
  chr_6_loss: 'perdita del cromosoma 6'
};

function computeRisk({ scores, isPartial = false, driver = '', cna = '' }) {
  const eff = {};
  MORPH_KEYS.forEach(k => {
    eff[k] = (isPartial && PARTIAL_EXCLUDED.includes(k)) ? 0 : (parseInt(scores[k], 10) || 0);
  });
  const rawMalignancy = MORPH_KEYS.reduce((a, k) => a + eff[k], 0);
  const maxRaw = isPartial ? MAX_RAW_PARTIAL : MAX_RAW_FULL;
  const hri = Math.round((rawMalignancy / maxRaw) * 100);

  const redFlags = Object.keys(RED_FLAG_THRESHOLDS)
    .filter(k => eff[k] >= RED_FLAG_THRESHOLDS[k])
    .map(k => RED_FLAG_LABELS[k]);

  const strongMolecular = STRONG_MOLECULAR_DRIVERS.includes(driver) || STRONG_MOLECULAR_CNA.includes(cna);
  const molecularSignals = [driver, cna].filter(v => MOLECULAR_LABELS[v]).map(v => MOLECULAR_LABELS[v]);
  const nonSpitzLineage = driver === 'gnaq_gna11';
  const hasMolecularData = !!(driver || cna);

  // ── Classe MORFOLOGICA (non integrata: dichiara di guardare solo il vetrino) ──
  let morph;
  if (redFlags.length)   morph = { level:'alto',            label:'ALTO — red flag morfologiche',                     alertClass:'danger'  };
  else if (hri >= 71)    morph = { level:'alto',            label:'ALTO — Spitzoid Melanoma (morfologia)',            alertClass:'danger'  };
  else if (hri >= 51)    morph = { level:'intermedio-alto', label:'INTERMEDIO-ALTO — AST with concerning features',   alertClass:'warning' };
  else if (hri >= 31)    morph = { level:'intermedio',      label:'INTERMEDIO — Atypical Spitz Tumor (AST)',          alertClass:'warning' };
  else                   morph = { level:'basso',           label:'BASSO — Spitz Nevus',                              alertClass:'success' };

  morph.action = redFlags.length
    ? 'URGENTE: staging completo, genomica raccomandata, discussione MDT, valutazione multidisciplinare dell\'indicazione a SNB (ruolo ancora controverso nelle AST — review sistematica 2024)'
    : hri >= 71 ? 'Staging completo + genomica + discussione MDT'
    : hri >= 51 ? 'Genomica raccomandata; valutazione multidisciplinare indicazione SNB (ruolo controverso nelle AST); follow-up stretto'
    : hri >= 31 ? 'Escissione completa + follow-up stretto; considerare genomica per documentazione'
    : 'Follow-up clinico routine';

  // La morfologia rassicura mentre la genetica no: il riquadro non puo' restare verde
  // e non puo' chiudere con "follow-up di routine".
  const discordance = strongMolecular && !redFlags.length && hri < 51;
  if (discordance) {
    if (morph.alertClass === 'success') morph.alertClass = 'warning';
    morph.action = 'La stratificazione genetica dissente dalla morfologia: vedi Classe di rischio integrata.';
  }

  // ── Classe INTEGRATA ────────────────────────────────────────────────────────
  let integrated = {};
  if (nonSpitzLineage) {
    integrated = (strongMolecular || redFlags.length || hri >= 51)
      ? { label:'Melanocytic neoplasm with non-Spitz lineage signal and high-risk features (consider blue-nevus-associated melanoma / alternative lineage)',
          confidence:'Moderata (non-Spitz driver — richiede revisione diagnostica allargata)' }
      : { label:'Melanocytic neoplasm with non-Spitz lineage signal (consider blue nevus lineage / diagnosi alternativa — questo tool non è ottimizzato per questa categoria)',
          confidence:'Moderata' };
  } else if (redFlags.length && strongMolecular) {
    integrated = { label:'⚠️ Neoplasia Spitz ad alto rischio / probabile Spitz melanoma — morfologia e genetica concordanti',
                   confidence:'Alta (red flag morfologiche + genomica convergenti)' };
  } else if (redFlags.length) {
    // v3.11.0: prima le red flag non raggiungevano il sommario e un caso con necrosi
    // "en masse" poteva uscire come "Spitz Nevus" mentre il riquadro diceva URGENTE.
    integrated = { label:'⚠️ Morfologia ad alto rischio (red flag): probabile Spitz melanoma — genomica indispensabile',
                   confidence: hasMolecularData
                     ? 'Moderata-Alta (red flag morfologiche; genomica disponibile non dirimente)'
                     : 'Moderata-Alta (red flag morfologiche; genomica non disponibile)' };
  } else if (strongMolecular && hri >= 51) {
    integrated = { label:'⚠️ Strong molecular evidence of high-risk Spitz neoplasm / probable Spitz melanoma — morfologia concordante',
                   confidence:'Alta (genomica + morfologia convergenti)' };
  } else if (strongMolecular) {
    integrated = { label:'⚠️ Strong molecular evidence of high-risk Spitz neoplasm — DISCORDANZA morfologia/genetica: richiede revisione esperta',
                   confidence:'Incerta (discordanza morfologica-molecolare — second opinion raccomandata)' };
  } else if (hri >= 71) {
    integrated = { label:'Spitzoid Melanoma (morfologia)',
                   confidence: driver ? 'Moderata-Alta' : 'Moderata (solo morfologia — genomica raccomandata)' };
  } else if (hri >= 51) {
    integrated = { label:'Atypical Spitz Tumor with concerning features', confidence:'Moderata (genomica raccomandata)' };
  } else if (cna === 'single_11p_gain' && hri <= 30) {
    integrated = driver === 'hras'
      ? { label:'Spitz Nevus (HRAS/11p low-risk profile)', confidence:'Alta (morfologia + genetica concordanti)' }
      : { label:'Spitz-associated low-risk profile (isolated 11p gain)', confidence:'Moderata' };
  } else if (driver === 'hras' && hri <= 30) {
    integrated = { label:'Spitz-associated low-risk profile (HRAS-mutated)', confidence:'Moderata-Alta' };
  } else if (driver === 'kinase_fusion' && hri <= 30) {
    integrated = { label:'Spitz-lineage lesion with low-risk molecular profile (kinase fusion)', confidence:'Moderata' };
  } else if (hri <= 30 && !driver) {
    integrated = { label:'Spitz Nevus', confidence:'Moderata-Alta' };
  } else {
    integrated = { label:'Atypical Spitz Tumor (AST)', confidence:'Moderata' };
  }
  integrated.discordance = discordance;
  integrated.alertClass = (redFlags.length || strongMolecular || hri >= 71) ? 'danger'
                        : (hri >= 31 || nonSpitzLineage) ? 'warning' : 'success';

  // ── Raccomandazioni gestionali ──────────────────────────────────────────────
  let recommendations;
  if (redFlags.length || (strongMolecular && hri >= 51)) {
    recommendations = [
      'Completamento staging (esame clinico, imaging secondo indicazione clinica)',
      'Genomica molecolare raccomandata (se non già eseguita)',
      'Discussione multidisciplinare (MDT)',
      'Valutazione multidisciplinare dell\'indicazione a biopsia del linfonodo sentinella (ruolo ancora controverso nelle neoplasie Spitz atipiche; cfr. Mazza et al., J Clin Med 2024)',
      'Follow-up clinico-strumentale ravvicinato'
    ];
  } else if (hri >= 51 || strongMolecular) {
    recommendations = [
      'Genomica molecolare raccomandata (se non già eseguita)',
      'Valutazione multidisciplinare dell\'indicazione a biopsia del linfonodo sentinella (ruolo ancora controverso nelle AST; cfr. Mazza et al., J Clin Med 2024)',
      'Follow-up clinico stretto'
    ];
  } else if (hri >= 31) {
    recommendations = [
      'Escissione completa con margini adeguati (se non già eseguita)',
      'Considerare genomica molecolare per documentazione',
      'Follow-up clinico'
    ];
  } else {
    recommendations = [
      'Follow-up clinico di routine',
      'Nessuna procedura aggiuntiva urgente indicata sulla base dei criteri morfologici e molecolari disponibili'
    ];
  }

  return { scores: eff, rawMalignancy, maxRaw, hri, isPartial, driver, cna,
           redFlags, strongMolecular, molecularSignals, nonSpitzLineage, hasMolecularData,
           morph, integrated, recommendations, discordance };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MORPH_KEYS, MAX_RAW_FULL, MAX_RAW_PARTIAL, PARTIAL_EXCLUDED,
    RED_FLAG_THRESHOLDS, RED_FLAG_LABELS, MOLECULAR_LABELS, computeRisk };
}
