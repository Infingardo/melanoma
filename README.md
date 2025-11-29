# 🔬 Spitz vs Melanoma Diagnostic Algorithm v3.6.4

**Algoritmo diagnostico integrato per la stratificazione del rischio nelle lesioni melanocitiche spitzoidi**

[![Version](https://img.shields.io/badge/version-3.6.4-blue.svg)](https://github.com/infingardo/spitz-melanoma-tool)
[![License](https://img.shields.io/badge/license-Educational-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production--Ready-success.svg)](https://github.com/infingardo/spitz-melanoma-tool)

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Prerequisiti](#prerequisiti)
- [Diagnosi Differenziale](#diagnosi-differenziale)
- [Caratteristiche](#caratteristiche)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Metodologia Scientifica](#metodologia-scientifica)
- [Bibliografia](#bibliografia)
- [Changelog](#changelog)
- [Autore](#autore)
- [Disclaimer](#disclaimer)

---

## 🎯 Panoramica

Tool diagnostico web-based per la **stratificazione del rischio** nelle lesioni melanocitiche con **morfologia spitzoide confermata**. Integra criteri morfologici (Massi & LeBoit 2014) e genetici (Bastian 2014) per distinguere Spitz nevus benigno, Atypical Spitz Tumor (AST) e Spitzoid Melanoma.

### ⚡ Quick Start

```bash
# Download
git clone https://github.com/infingardo/spitz-melanoma-tool.git
cd spitz-melanoma-tool

# Apri nel browser
open index.html
```

**Nessuna installazione richiesta** - funziona offline!

---

## ⚠️ Prerequisiti

### 🔴 LEGGERE PRIMA DELL'USO

Questo tool è applicabile **ESCLUSIVAMENTE** a lesioni con:

✅ **Morfologia SPITZOIDE confermata:**
- Cellule epitelioidi e/o fusate
- Nuclei vescicolosi prominenti con nucleoli evidenti
- Possibile presenza di cellule giganti multinucleate

❌ **NON utilizzare per:**
- Nevi melanocitici comuni (giunzionali, composti, dermici)
- Blue nevi o altre varianti non-spitzoidi
- Melanomi convenzionali senza morfologia spitzoide
- Lesioni non melanocitiche

### 📊 Workflow Diagnostico Corretto

```
BIOPSIA CUTANEA
    ↓
SCREENING MORFOLOGICO
    ↓
    ├─→ Nevo comune? ────────────→ Diagnosi diretta ✅
    │
    ├─→ Dubbio? ─────────────────→ Consulta DD nel tool 📖
    │
    └─→ SPITZOIDE confermato ────→ USA QUESTO TOOL 🔬
        ↓
        CALCOLA MALIGNANCY SCORE (0-100)
        ↓
        ├─ 0-30:   Spitz Nevus
        ├─ 31-50:  Atypical Spitz Tumor
        ├─ 51-70:  AST with concerning features
        └─ 71-100: Spitzoid Melanoma
            ↓
            INTEGRA CON GENETICA (Bastian 2014)
            ↓
            DIAGNOSI FINALE + MANAGEMENT
```

---

## 🔍 Diagnosi Differenziale

### Sezione DD Interattiva nel Tool

Il tool include una **tabella comparativa collapsabile** che aiuta a distinguere lesioni spitzoidi da nevi comuni:

| Caratteristica | LESIONI SPITZOIDI ✅ | NEVI COMUNI ❌ |
|----------------|---------------------|----------------|
| **Citologia** | Cellule epitelioidi/fusate grandi | Piccole cellule rotonde/ovali |
| **Nuclei** | Vescicolosi con nucleoli prominenti | Piccoli, regolari, condensati |
| **Cellule giganti** | Spesso presenti (2-20+ nuclei) | Assenti |
| **Nidi** | Grandi, espansivi | Piccoli, regolari |
| **Maturazione** | Variabile (presente → assente) | Sempre presente A→B→C |
| **Clinica** | Papula eritematosa/rosa | Macula/papula marrone uniforme |
| **Età tipica** | Bambini/giovani adulti (<20 anni) | Tutte le età |

### Rule of Thumb Pratica

💡 **"Se vedi cellule grandi/strane → probabilmente spitzoide → USA IL TOOL"**

💡 **"Se pensi 'nevo banale' → NON usare il tool"**

---

## ✨ Caratteristiche

### 📊 Malignancy Score 0-100 (Intuitivo!)

- **Selezioni BASSE (0 punti) = Benigno** ✅
- **Selezioni ALTE = Maligno** ⚠️
- Nessuna inversione nascosta - calcolo lineare diretto!

### 🧬 9 Criteri Morfologici Pesati (Massi & LeBoit 2014)

| Criterio | Range | Note |
|----------|-------|------|
| **Maturazione A→B→C** | 0-20 | Criterio critico |
| **Simmetria** | 0-15 | Criterio maggiore |
| **Circoscrizione** | 0-15 | Criterio maggiore |
| **Mitosi derma profondo** | 0-15 | Criterio critico |
| **Cellule giganti multinucleate** | 0-8 | Feature spitzoide |
| **Pattern infiltrazione** | 0-10 | |
| **Atipia nucleare** | 0-10 | |
| **Necrosi** | 0-5 | Red flag se presente |
| **Ulcerazione** | 0-5 | |

**Totale raw:** 0-103 punti → **normalizzato a 0-100**

### 🧪 Stratificazione Genetica (Bastian 2014)

#### Driver Mutations
- **HRAS mutation** (low-risk, gain 11p)
- **Kinase fusions:** ALK, ROS1, RET, NTRK1, BRAF (60% Spitz)
- **MAP3K8 fusions** (33% melanomi spitzoidi pediatrici - Newman 2019)
- **TERT promoter** ⚠️ - Criterio solido malignità (85% metastasi vs 0% nevi)

#### CNA Profiling
- **Single gain 11p** - Low-risk profile
- **Multiple CNAs** - Red flag instabilità genomica
- **Chr 6 loss** - Marker malignità
- **CDKN2A loss** - Evento secondario, non diagnostico da solo

### 🚨 Red Flags Override

Il tool identifica automaticamente **red flags critici**:

- **Maturazione assente/invertita** (≥16 punti)
- **Mitosi ≥6/mm² e/o atipiche** (≥12 punti)
- **Necrosi "en masse"** (5 punti)

**→ Override automatico a diagnosi "Spitzoid Melanoma"**

### 📚 Bibliografia Interattiva

- **6 papers core** con DOI/PubMed links
- Filtri per categoria (morfologia/genetica/review)
- Search box per trovare papers
- **BibTeX export** one-click

### 📄 Export PDF

Genera report PDF completo con html2pdf.js

---

## 🚀 Installazione

### Opzione 1: Uso Locale (Offline)

```bash
git clone https://github.com/infingardo/spitz-melanoma-tool.git
cd spitz-melanoma-tool
open index.html
```

### Opzione 2: GitHub Pages (Online)

```
https://infingardo.github.io/spitz-melanoma-tool/
```

### Requisiti

- Browser moderno (Chrome, Firefox, Safari, Edge)
- JavaScript abilitato
- Nessun server richiesto

---

## 📖 Utilizzo

### Step 1: Conferma Prerequisito Morfologico
Verifica morfologia spitzoide. Se hai dubbi, consulta sezione DD.

### Step 2: Compila Criteri Morfologici
Seleziona il valore appropriato per ciascuno dei 9 criteri.

### Step 3: Aggiungi Dati Genetici (Opzionale)
Se disponibile genomica: driver mutation + CNA profile.

### Step 4: Calcola Score
Click su **"🧮 Calcola Malignancy Score"**

### Step 5: Interpreta Risultati

| Score | Diagnosi | Management |
|-------|----------|------------|
| **0-30** | Spitz Nevus | Follow-up clinico routine |
| **31-50** | Atypical Spitz Tumor | Excision completa + follow-up stretto |
| **51-70** | AST concerning | Genomica raccomandata + consider sentinel node |
| **71-100** | Spitzoid Melanoma | Staging completo + MDT + genomica |

---

## 🔬 Metodologia Scientifica

### Morfologia: Massi & LeBoit 2014

**Riferimento:** *Histological Diagnosis of Nevi and Melanoma*, 2nd Edition, Springer

- **Gates 0-8 approach** per diagnosi differenziale
- **Criteri con range variabile** basati su rilevanza clinica
- Maturazione e mitosi: range esteso per maggiore discriminazione
- Altri criteri: range standard

### Genetica: Bastian 2014

**Riferimento:** *The Molecular Pathology of Melanoma*, Annual Review of Pathology, vol 9:239-271

- **TERT promoter** come criterio solido di progressione maligna
- **CNA profiling** per stratificazione rischio
- **CDKN2A** come evento secondario, non diagnostico da solo

### MAP3K8: Newman 2019 & Houlier 2020

- **33% melanomi spitzoidi pediatrici** (Newman Nat Med 2019)
- **82% p16 loss, 70% homozygous CDKN2A deletion** (Newman AJSP 2019)
- **CDKN2A inactivation 77%** in casi atipici/maligni (Houlier 2020)
- **MEK inhibitor** potenzialmente targetable

---

## 📚 Bibliografia

### Core References

1. **Bastian BC** (2014). The Molecular Pathology of Melanoma: An Integrated Taxonomy of Melanocytic Neoplasia. *Annual Review of Pathology* 9:239-271.  
   DOI: [10.1146/annurev-pathol-012513-104658](https://doi.org/10.1146/annurev-pathol-012513-104658) | PMID: 24460189

2. **Massi G, LeBoit PE** (2014). *Histological Diagnosis of Nevi and Melanoma* (2nd Edition). Springer.  
   ISBN: 978-3-642-37310-7

3. **Newman S, Fan L, Pribnow A, et al.** (2019). Clinical genome sequencing uncovers potentially targetable truncations and fusions of MAP3K8 in spitzoid and other melanomas. *Nature Medicine* 25:597-602.  
   DOI: [10.1038/s41591-019-0373-y](https://doi.org/10.1038/s41591-019-0373-y) | PMID: 30988516

4. **Newman S, Rosenbach M, Chu EY, et al.** (2019). Pediatric spitzoid melanoma with MAP3K8 fusion. *American Journal of Surgical Pathology* 43(9):1631-1637.  
   PMID: 31498175

5. **Houlier A, Pissaloux D, Masse I, et al.** (2020). Melanocytic tumors with MAP3K8 fusions: report of 33 cases with morphological-genetic correlations. *Modern Pathology* 33:846-857.  
   DOI: [10.1038/s41379-019-0384-8](https://doi.org/10.1038/s41379-019-0384-8) | PMID: 31719662

6. **Raghavan SS, Peternel S, Mully TW, et al.** (2020). Spitz melanoma is a distinct subset of spitzoid melanoma. *Modern Pathology* 33:1122-1134.  
   DOI: [10.1038/s41379-019-0445-z](https://doi.org/10.1038/s41379-019-0445-z)

---

## 📝 Changelog

### v3.6.4 (2024-11-28) - Current
**🧹 Pulizia & Fix**
- ✅ Fix wording red flag mitosi: "≥6/mm² e/o atipiche" (più chiaro)
- ✅ Giant cells: ridotto max da 10 a 8 punti (assenza non è patognomonica)
- ✅ Link GitHub corretto al repository specifico
- ✅ Pulizia documentazione: rimossi file obsoleti (READM.md)
- ✅ Aggiornate istruzioni deployment
- ✅ Max raw score: 103 (non più 105)

### v3.6.3 (2024-11-27)
**🐛 Bug Fixes & Improvements**
- ✅ Fix red flag maturazione: threshold ≥16 (non solo 20)
- ✅ Aggiunto Newman AJSP 2019 alla bibliografia
- ✅ Nota clinica su cellule giganti assenti
- ✅ Rimosso Kamino bodies dalla DD

### v3.6.2 (2024-11-26)
**✨ Diagnosi Differenziale**
- Aggiunta sezione DD collapsabile lesioni spitzoidi vs nevi comuni

### v3.6.1 (2024-11-26)
**📋 Prerequisito Morfologico Esplicito**
- Warning box dettagliato prima dei criteri

### v3.6 (2024-11-26)
**🔄 Inversione Dropdown Completa**
- Tutti dropdown invertiti per coerenza totale

### v3.5 (2024-11-26)
**📊 Malignancy Score Intuitivo**
- Score 0-100 invertito: 0=benigno, 100=maligno

### v3.4 (2024-11-25)
**🔧 Fix Matematico Scoring**
- Sistema normalizzato

### v3.3 (2024-11-25)
**📚 Bibliografia & Genetica**
- Bibliografia interattiva
- Stratificazione genetica Bastian 2014

---

## 👨‍⚕️ Autore

**Dr. Filippo Bianchi**  
Direttore SC Anatomia Patologica  
ASST Fatebenefratelli-Sacco, Milano

📧 Email: filippo.bianchi@asst-fbf-sacco.it  
💻 GitHub: [@infingardo](https://github.com/infingardo)  
🔬 Repository: [spitz-melanoma-tool](https://github.com/infingardo/spitz-melanoma-tool)

---

## ⚖️ Disclaimer

**⚠️ IMPORTANTE**

Questo tool è un **ausilio decisionale** per patologi esperti e **NON sostituisce**:

- ❌ Esperienza clinica del patologo
- ❌ Correlazione clinico-patologica
- ❌ Revisione morfologica esperta
- ❌ Second opinion in casi difficili

**Validazione:**
- Tool basato su letteratura peer-reviewed
- Raccomandazione: validazione su casistica locale prima uso clinico
- Non approvato come dispositivo medico
- Solo per uso educativo e ricerca

---

## 📄 Licenza

**Educational Use Only**

Copyright (c) 2024 Dr. Filippo Bianchi

---

## 🙏 Ringraziamenti

- **Massi & LeBoit** per il framework morfologico sistematico
- **Boris Bastian** per la classificazione molecolare integrata
- **Newman, Houlier et al.** per gli studi MAP3K8
- **Comunità dermatopatologia** per feedback e suggerimenti

---

<div align="center">

**Made with ❤️ for the dermatopathology community**

**⭐ Se trovi utile questo tool, considera di lasciare una star su GitHub! ⭐**

</div>
