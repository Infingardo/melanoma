# 🔬 Spitz vs Melanoma Diagnostic Algorithm v3.9.2

**Algoritmo diagnostico integrato per la stratificazione del rischio nelle lesioni melanocitiche spitzoidi**

[![Version](https://img.shields.io/badge/version-3.9.2-blue.svg)](https://github.com/infingardo/spitz-melanoma-tool)
[![License](https://img.shields.io/badge/license-Educational-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production--Ready-success.svg)](https://github.com/infingardo/spitz-melanoma-tool)

---

## 📋 Indice

- [Panoramica](#-panoramica)
- [Principio Guida](#-principio-guida)
- [Quick Start](#-quick-start)
- [Prerequisiti](#-prerequisiti)
- [Diagnosi Differenziale](#-diagnosi-differenziale)
- [Caratteristiche](#-caratteristiche)
- [Metodologia Scientifica](#-metodologia-scientifica)
- [Changelog](#-changelog)
- [Bibliografia](#-bibliografia)
- [Autore](#-autore)
- [Disclaimer](#-disclaimer)

---

## 🎯 Panoramica

Tool diagnostico web-based per la **stratificazione del rischio** nelle lesioni melanocitiche con **morfologia spitzoide confermata**. Integra criteri morfologici (Massi & LeBoit 2014) e genetici (Bastian 2014) per distinguere Spitz nevus benigno, Atypical Spitz Tumor (AST) e Spitzoid Melanoma.

### Cosa FA questo tool
- ✅ Rende esplicito e documentabile il ragionamento diagnostico
- ✅ Standardizza la valutazione morfologica su 9 criteri pesati
- ✅ Integra dati genetici quando disponibili
- ✅ Genera un report difendibile con export PDF completo

### Cosa NON FA questo tool
- ❌ Non sostituisce il giudizio del patologo esperto
- ❌ Non determina la diagnosi in isolamento
- ❌ Non si applica a lesioni non-spitzoidi
- ❌ Le soglie numeriche non derivano da validazione prospettica su casistica esterna

---

## ⚖️ Principio Guida

> **"Lo score supporta e documenta il ragionamento diagnostico, non lo sostituisce. Le soglie numeriche sono operative e interne al tool; non derivano da validazione prospettica su casistica esterna."**

---

## ⚡ Quick Start

```bash
git clone https://github.com/infingardo/spitz-melanoma-tool.git
cd spitz-melanoma-tool
open index.html
```

**Online:** [https://infingardo.github.io/spitz-melanoma-tool/](https://infingardo.github.io/spitz-melanoma-tool/)

Funziona offline. Nessuna installazione richiesta.

---

## ⚠️ Prerequisiti

Applicabile **ESCLUSIVAMENTE** a lesioni con **morfologia SPITZOIDE confermata**:

✅ **Caratteristiche spitzoidi:**
- Cellule epitelioidi e/o fusate
- Nuclei vescicolosi prominenti con nucleoli evidenti
- Possibile presenza di cellule giganti multinucleate

❌ **NON utilizzare per:**
- Nevi melanocitici comuni (giunzionali, composti, dermici)
- Blue nevi o altre varianti non-spitzoidi
- Melanomi convenzionali senza morfologia spitzoide

---

## 🔍 Diagnosi Differenziale

Il tool include una sezione DD interattiva (collassabile) con tabella comparativa lesioni spitzoidi vs nevi comuni su 8 caratteristiche morfologiche e cliniche.

**Rule of thumb:** *"Se vedi cellule grandi/strane → spitzoide → usa il tool. Se pensi 'nevo banale' → non usare il tool."*

---

## ✨ Caratteristiche

### 📊 Heuristic Risk Index (HRI) 0-100

Score normalizzato da 0 a 100. Etichetta deliberatamente euristica: le soglie (30/50/70) sono operative e non derivano da validazione prospettica.

| HRI | Classe di rischio |
|-----|-------------------|
| 0–30 | Benigno / Spitz Nevus |
| 31–50 | AST — Atypical Spitz Tumor |
| 51–70 | AST with concerning features |
| ≥71 | Spitzoid Melanoma (morfologia) |

### 🔬 9 Criteri Morfologici (Massi & LeBoit 2014)

| Criterio | Range | Note |
|----------|-------|------|
| **Maturazione A→B→C** | 0–20 | 🎯 Criterio più importante |
| **Simmetria** | 0–15 | Obbligatorio su escissione completa; N/A su biopsia parziale |
| **Circoscrizione** | 0–15 | Obbligatorio su escissione completa; N/A su biopsia parziale |
| **Cellule giganti** | 0–8 | Assenza non patognomonica |
| **Mitosi derma profondo** | 0–15 | Hot spot count (WHO-style) |
| **Pattern infiltrazione** | 0–10 | |
| **Necrosi** | 0–5 | |
| **Atipia nucleare** | 0–10 | ⚠️ Non sopravvalutare isolata |
| **Ulcerazione** | 0–5 | |

**Max totale:** 103 punti (escissione) / 73 punti (biopsia parziale) → normalizzato 0–100.

**Validazione obbligatoria:** tutti i criteri morfologici richiesti devono essere esplicitamente selezionati (placeholder `— Seleziona —`). Simmetria e circoscrizione obbligatorie solo su escissione completa.

### 🚨 Red Flags Automatici

Override immediato a "RED FLAGS — Spitzoid Melanoma" se:
- Maturazione assente/invertita (≥16 punti)
- Mitosi ≥6/mm² e/o atipiche (≥12 punti)
- Necrosi "en masse" (5 punti)

### 🧬 Stratificazione Genetica (Bastian 2014)

| Driver | Profilo | Comportamento |
|--------|---------|---------------|
| HRAS mutation | Spitz-associated | Low-risk |
| Kinase fusion (ALK/ROS1/RET/NTRK1/BRAF) | Spitz-lineage | Low-to-intermediate |
| MAP3K8 fusion/truncation | Spitz-lineage, polo atipico/aggressivo | Variabile — interpretare con morfologia + CDKN2A/p16 + TERT + CNA burden |
| BRAF V600E + BAP1 loss | AST subset | Intermedio |
| TERT promoter | High-risk evidence | Non override assoluto — strong molecular evidence of high-risk |
| GNAQ/GNA11 Q209 | Non-Spitz lineage | Blue nevus / uveal melanoma lineage → tool non ottimizzato |
| CDKN2A loss isolato | Evento secondario | Non diagnostico da solo |

**CNA Profile:**
- Isolated 11p gain = Spitz-associated low-risk (HRAS rafforza ma non è obbligatorio)
- Multiple CNAs = instabilità genomica red flag
- Chr 6 loss = marker malignità

### 🔗 Lineage Gate GNAQ/GNA11

Se il driver è GNAQ/GNA11, il summary finale esce dal recinto Spitz e segnala esplicitamente "non-Spitz lineage signal" con nota che il tool non è ottimizzato per questa categoria.

### 📋 Logica del Summary Integrato

Il summary combina HRI + driver + CNA in una scala di priorità:

1. GNAQ/GNA11 → override non-Spitz (qualunque HRI)
2. Strong molecular evidence (TERT / multiple CNA / chr6 loss) → classe alta con check discordanza morfologia/genetica
3. HRI ≥71 → Spitzoid Melanoma
4. HRI 51–70 → AST with concerning features
5. `single_11p_gain` + HRI ≤30 → Spitz-associated low-risk (con/senza HRAS)
6. `hras` + HRI ≤30 → Spitz-associated low-risk (HRAS-mutated)
7. `kinase_fusion` + HRI ≤30 → Spitz-lineage lesion with low-risk molecular profile
8. HRI ≤30 senza driver → Spitz Nevus
9. Default → AST

### 📖 Framework Urso/Ackerman (score intermedi)

Per HRI 31–70 senza genetica "forte" e senza GNAQ/GNA11, il summary cita il framework Urso (Am J Dermatopathol 2019) e la frase di Ackerman:

> *"Esistono solo 3 tipi di lesioni pigmentate: il nevo, il melanoma, e il non lo so."*

Il territorio intermedio non è un fallimento diagnostico — è la risposta corretta per lesioni nel continuum biologico.

### 🦺 SNB — Sentinel Node Biopsy

Il tool usa deliberatamente il wording "valutazione multidisciplinare dell'indicazione a SNB, dato il ruolo ancora controverso nelle AST" in linea con:

> Mazza M et al. Sentinel Lymph Node Biopsy in Atypical Spitz Tumors: A Systematic Review. *J Clin Med* 2024;13(11):3232. PMID 38892943.

La positività del linfonodo sentinella nelle AST non ha significato prognostico lineare e gli outcome restano significativamente migliori rispetto al melanoma convenzionale.

### 💾 Funzionalità tecniche

- **SessionStorage**: i dati del form vengono salvati nella sessione e ripristinati al reload
- **Export PDF completo**: tutte le tab vengono rese temporaneamente visibili prima della cattura, con ripristino garantito da `.finally()` anche in caso di errore
- **Reset**: riporta il form allo stato iniziale e ripristina la tab Morfologia come default
- **Export BibTeX**: esporta tutta la bibliografia in formato .bib
- **Filtri bibliografia combinati**: ricerca testuale + filtro per categoria (Morfologia/Genetica/Review) funzionano in AND
- **Tooltip mobile**: click-to-show con chiusura automatica

---

## 🔬 Metodologia Scientifica

### Maturazione A→B→C

Non è solo "cellule più piccole in profondità". Richiede riduzione progressiva di tre componenti:
1. Dimensioni cellulari
2. Volume citoplasmatico
3. Attività mitotica in profondità

### Conta Mitosi: Hot Spot (WHO-style)

Contare nell'area di **1 mm² con maggior densità mitotica** nel derma profondo. NON fare la media su più campi.

### Atipia Nucleare

⚠️ Molti Spitz benigni hanno nuclei grandi e "strani". **Atipia senza perdita di maturazione ≠ melanoma.**

### Biopsia Parziale

Su shave, punch o incisionale: simmetria e circoscrizione non sono valutabili, vengono escluse dal calcolo e il max score scende da 103 a 73.

---

## 📝 Changelog

### v3.9.2 (2025-03-08) — Current
- ✅ Summary: rami espliciti per HRAS-only e kinase_fusion con HRI basso (non più accorpati nel generico AST)
- ✅ Framework Urso/Ackerman escluso per GNAQ/GNA11 (no contraddizione semantica)
- ✅ Fix wording 11p gain: rimossa frase interna contraddittoria su "co-presenza/isolato"
- ✅ Tooltip CNA allineato al testo principale (non più "Single gain 11p = HRAS low-risk")

### v3.9.1 (2025-03-08)
- ✅ SNB review corretta: Mazza M et al. J Clin Med 2024, PMID 38892943 (sostituisce Ribero/JEADV errata)
- ✅ PMID Raghavan 2020: 31857696 → 31900433
- ✅ 11p gain: HRAS rafforza ma non è obbligatorio (logica ammorbidita)
- ✅ GNAQ/GNA11 lineage gate nel summary (non-Spitz lineage override)
- ✅ exportPDF: `.catch().finally()` — ripristino tab garantito anche su errore

### v3.9.0 (2025-03-08)
- ✅ Simmetria e circoscrizione obbligatorie su escissione completa (placeholder + requiredIds condizionale)
- ✅ `single_gain` → `single_11p_gain` con label e interpretazione più precisa
- ✅ exportPDF mostra tutte le tab-content prima della cattura
- ✅ resetForm ripristina tab Morfologia come default
- ✅ Card bibliografica SNB review 2024 aggiunta

### v3.8.0 (2025-03-08)
- ✅ Fix validazione: rimosso check `allDefault`, sostituito con placeholder `value=""` su criteri obbligatori
- ✅ Filtri bibliografia: `applyBibFilters()` combina categoria + ricerca in AND
- ✅ TERT depotenziato: non fa più override automatico a "MELANOMA"; produce "strong molecular evidence of high-risk"
- ✅ SNB: "consider sentinel node biopsy" → "valutazione multidisciplinare dell'indicazione a SNB (ruolo controverso nelle AST)"
- ✅ MAP3K8: aggiunta nota "interpret only with morphology, CDKN2A/p16, TERT, and CNA burden"
- ✅ "Malignancy Score" → "Heuristic Risk Index"; "Diagnosi suggerita" → "Classe di rischio integrata"
- ✅ Caveat esplicito sotto il numero: "Le soglie sono operative e non validate prospetticamente"
- ✅ `showBibCard()` refactored: usa `data-tab` invece di `onclick.toString()`, mostra `#result` se nascosto
- ✅ PMID Bastian 2014: 24460189 → 24460190
- ✅ PMID Newman Nat Med 2019: 30988516 → 30833747
- ✅ Titolo Newman AJSP 2019 corretto: "Pathologic Characteristics of Spitz Melanoma With MAP3K8 Fusion or Truncation in a Pediatric Cohort"
- ✅ Cloudflare email decode rimosso

### v3.7.0 (2025-02-19)
- SessionStorage, tooltip mobile click-to-show, note libere in PDF, accessibilità colori, validazione input

### v3.6.9 (2025-01-19)
- Framework filosofico Urso/Ackerman, bibliografia Urso 2019 + 2020

### v3.6.8 (2025-01-19)
- Tooltip maturazione (definizione tripartita), tooltip mitosi (hot spot WHO-style), tooltip atipia (warning educativo)
- MAP3K8 + multiple CNAs: warning specifico

### v3.6.7 (2025-01-19)
- Flag biopsia parziale (esclude simmetria/circoscrizione), box "Ruolo del patologo"

---

## 📚 Bibliografia

1. **Bastian BC** (2014). The Molecular Pathology of Melanoma. *Annu Rev Pathol* 9:239-271. PMID: **24460190**

2. **Massi G, LeBoit PE** (2014). *Histological Diagnosis of Nevi and Melanoma* (2nd ed.). Springer. ISBN: 978-3-642-37310-7

3. **Newman S et al.** (2019). MAP3K8 in spitzoid and other melanomas. *Nature Medicine* 25:597-602. PMID: **30833747**

4. **Newman S et al.** (2019). Pathologic Characteristics of Spitz Melanoma With MAP3K8 Fusion or Truncation in a Pediatric Cohort. *Am J Surg Pathol* 43(9):1631-1637. PMID: 31498175

5. **Houlier A et al.** (2020). Melanocytic tumors with MAP3K8 fusions. *Modern Pathology* 33:846-857. PMID: 31719662

6. **Raghavan SS et al.** (2020). Spitz melanoma is a distinct subset of spitzoid melanoma. *Modern Pathology* 33:1122-1134. PMID: **31900433**

7. **Urso C** (2019). Melanocytic skin neoplasms: what lesson from genomic aberrations? *Am J Dermatopathol* 41:623-629. PMID: 30585798

8. **Urso C** (2020). La rivoluzione della genetica nelle lesioni melanocitiche. *Dermatopatologia Forum*.

9. **Mazza M et al.** (2024). Sentinel Lymph Node Biopsy in Atypical Spitz Tumors: A Systematic Review. *J Clin Med* 13(11):3232. PMID: **38892943**

### Note bibliografiche
I PMID in **grassetto** hanno subito correzioni rispetto a versioni precedenti del tool. Verificare sempre su PubMed prima di citare.

---

## 👨‍⚕️ Autore

**Dr. Filippo Bianchi**
Direttore SC Anatomia Patologica
ASST Fatebenefratelli-Sacco, Milano

📧 filippo.bianchi@asst-fbf-sacco.it
💻 GitHub: [@infingardo](https://github.com/infingardo)

---

## ⚖️ Disclaimer

Tool di supporto al ragionamento diagnostico per patologi esperti. **Non sostituisce** la correlazione clinico-patologica, la revisione morfologica, né il giudizio del patologo. Le soglie numeriche non derivano da validazione prospettica su casistica esterna.

Non approvato come dispositivo medico. Solo per uso educativo e ricerca.

---

<div align="center">

*Con il supporto di Claude (Anthropic) — peer review inclusa*

**⭐ Se trovi utile questo tool, considera di lasciare una star su GitHub! ⭐**

</div>
