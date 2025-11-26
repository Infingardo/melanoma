# 🔬 Spitz vs Melanoma Diagnostic Algorithm v3.6.2

**Algoritmo diagnostico integrato per la stratificazione del rischio nelle lesioni melanocitiche spitzoidi**

[![Version](https://img.shields.io/badge/version-3.6.2-blue.svg)](https://github.com/infingardo/spitz-melanoma-tool)
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
- Possibile presenza di cellule giganti multinucleate (60-70%)

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

### Nuova Feature v3.6.2: Sezione DD Interattiva

Il tool include una **tabella comparativa collapsabile** che aiuta a distinguere lesioni spitzoidi da nevi comuni:

| Caratteristica | LESIONI SPITZOIDI ✅ | NEVI COMUNI ❌ |
|----------------|---------------------|----------------|
| **Citologia** | Cellule epitelioidi/fusate grandi | Piccole cellule rotonde/ovali |
| **Nuclei** | Vescicolosi con nucleoli prominenti | Piccoli, regolari, condensati |
| **Cellule giganti** | Spesso presenti (2-20+ nuclei) | Assenti |
| **Kamino bodies** | Comuni (60-70% dei casi) | Assenti |
| **Nidi** | Grandi, espansivi | Piccoli, regolari |
| **Maturazione** | Variabile (presente → assente) | Sempre presente A→B→C |
| **Clinica** | Papula eritematosa/rosa | Macula/papula marrone uniforme |
| **Età tipica** | Bambini/giovani adulti (<20 anni) | Tutte le età |

### Rule of Thumb Pratica

💡 **"Se vedi cellule grandi/strane → probabilmente spitzoide → USA IL TOOL"**

💡 **"Se pensi 'nevo banale' → NON usare il tool"**

### Gray Zone: Lesioni Borderline

- **Nevi comuni con atipia focale:** Valutare se reattiva (trauma, sun damage) vs intrinseca
- **Spitz nevus "convenzionali" senza atipia:** Score atteso 0-20/100, diagnosi morfologica sufficiente
- **In caso di dubbio persistente:** Second opinion + eventuale genomica (FISH, NGS)

---

## ✨ Caratteristiche

### 📊 Malignancy Score 0-100 (Intuitivo!)

**v3.6:** Dropdown completamente invertiti per coerenza totale

- **Selezioni BASSE (0 punti) = Benigno** ✅
- **Selezioni ALTE (20 punti) = Maligno** ⚠️
- Nessuna inversione nascosta - calcolo lineare diretto!

### 🧬 9 Criteri Morfologici Pesati (Massi & LeBoit 2014)

1. **Maturazione A→B→C** (0-20 punti) - Criterio critico
2. **Simmetria** (0-15 punti)
3. **Circoscrizione** (0-15 punti)
4. **Cellule giganti multinucleate** (0-10 punti) - Feature spitzoide
5. **Mitosi derma profondo** (0-15 punti) - Criterio critico
6. **Pattern infiltrazione** (0-10 punti)
7. **Necrosi** (0-5 punti) - Red flag
8. **Atipia nucleare** (0-10 punti)
9. **Ulcerazione** (0-5 punti)

**Totale max:** 105 punti → normalizzato a 100/100

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

### 📚 Bibliografia Interattiva

- **5 papers core** con DOI/PubMed links
- Filtri per categoria (morfologia/genetica/review)
- Search box per trovare papers
- Cards espandibili con key findings
- **BibTeX export** one-click per citazioni

### 🚨 Red Flags Override

Il tool identifica automaticamente **red flags critici**:

- **Maturazione assente** (≥16 punti)
- **Mitosi ≥6/mm² derma profondo** (≥12 punti)
- **Necrosi "en masse"** (5 punti)

**→ Override automatico a diagnosi "Spitzoid Melanoma"** indipendentemente dallo score totale

### 📄 Export PDF

- Genera report PDF completo con html2pdf.js
- Include tutti i criteri, score, interpretazione e genetica
- Pronto per archiviazione o second opinion

---

## 🚀 Installazione

### Opzione 1: Uso Locale (Offline)

```bash
# Clone repository
git clone https://github.com/infingardo/spitz-melanoma-tool.git
cd spitz-melanoma-tool

# Apri nel browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Opzione 2: GitHub Pages (Online)

Il tool è disponibile online:
```
https://infingardo.github.io/spitz-melanoma-tool/
```

### Requisiti

- **Browser moderno** (Chrome, Firefox, Safari, Edge)
- **JavaScript abilitato**
- **Nessun server richiesto** - tutto client-side!

---

## 📖 Utilizzo

### Step 1: Conferma Prerequisito Morfologico

Verifica che la lesione abbia morfologia spitzoide. Se hai dubbi, consulta la sezione **"🔍 Diagnosi Differenziale"** nel tool.

### Step 2: Compila Criteri Morfologici

Seleziona il valore appropriato per ciascuno dei 9 criteri:

```
Esempio Spitz Nevus benigno:
✅ Maturazione: "Presente e completa (0 punti - BENIGNO)"
✅ Simmetria: "Perfettamente simmetrica (0 punti)"
✅ Circoscrizione: "Ben circoscritta (0 punti)"
✅ Cellule giganti: "Presenti e tipiche (0 punti)"
✅ Mitosi: "Assenti nel derma profondo (0 punti)"
... (tutti criteri favorevoli)

→ Malignancy Score: 0-15/100
→ Diagnosi: Spitz Nevus
```

### Step 3: Aggiungi Dati Genetici (Opzionale)

Se disponibile genomica:

- **Driver mutation:** Seleziona HRAS, kinase fusion, MAP3K8, TERT, etc.
- **CNA profile:** Seleziona single gain 11p, multiple CNAs, chr 6 loss, etc.

### Step 4: Calcola Score

Click su **"🧮 Calcola Malignancy Score"**

Il tool genera:
- **Malignancy Score** (0-100)
- **Interpretazione morfologica** con diagnosi suggerita
- **Breakdown punteggi** dettagliato
- **Analisi genetica** integrata
- **Sommario finale** con livello confidenza

### Step 5: Interpreta Risultati

| Score | Diagnosi | Management |
|-------|----------|------------|
| **0-30** | Spitz Nevus | Follow-up clinico routine |
| **31-50** | Atypical Spitz Tumor | Excision completa + follow-up stretto |
| **51-70** | AST concerning | Genomica raccomandata + consider sentinel node |
| **71-100** | Spitzoid Melanoma | Staging completo + MDT + genomica |

**⚠️ Red Flags identificati** → Diagnosi automatica "Melanoma" + urgenza staging

---

## 🔬 Metodologia Scientifica

### Morfologia: Massi & LeBoit 2014

**Riferimento:** *Histological Diagnosis of Nevi and Melanoma*, 2nd Edition, Springer

- **Gates 0-8 approach** per diagnosi differenziale
- **Criteri pesati** basati su rilevanza clinica:
  - Maturazione e mitosi: peso x3 (20, 15 punti)
  - Simmetria e circoscrizione: peso x2 (15, 15 punti)
  - Altri criteri: peso standard (5-10 punti)

### Genetica: Bastian 2014

**Riferimento:** *The Molecular Pathology of Melanoma: An Integrated Taxonomy of Melanocytic Neoplasia*, Annual Review of Pathology, vol 9:239-271

- **Classificazione molecolare** basata su driver mutations
- **TERT promoter** come criterio solido di progressione maligna
- **CNA profiling** per stratificazione rischio
- **CDKN2A** come evento secondario, non diagnostico da solo

### MAP3K8: Newman 2019 & Houlier 2020

- **33% melanomi spitzoidi pediatrici** (Newman Nat Med 2019)
- **Partner più comune:** SVIL (46%)
- **CDKN2A inactivation** nel 77% casi atipici/maligni
- **MEK inhibitor** potenzialmente targetable

### Validazione

Il tool implementa:
- ✅ Criteri evidence-based da letteratura peer-reviewed
- ✅ Pesi relativi validati in pratica clinica
- ✅ Red flags basati su outcome studies
- ✅ Integrazione morfologia + genetica come da best practices

---

## 📝 Changelog

### v3.6.2 (2024-11-26) - Current
**✨ NEW: Diagnosi Differenziale**
- Aggiunta sezione DD collapsabile lesioni spitzoidi vs nevi comuni
- Tabella comparativa 9 caratteristiche morfologiche
- Box "Gray Zone" per lesioni borderline
- Rule of thumb pratica per selezione casi appropriati

### v3.6.1 (2024-11-26)
**📋 Prerequisito Morfologico Esplicito**
- Warning box dettagliato prima dei criteri
- Lista caratteristiche spitzoidi richieste
- Lista lesioni per cui NON usare il tool
- Workflow diagnostico corretto esplicitato

### v3.6 (2024-11-26)
**🔄 Inversione Dropdown Completa**
- Tutti dropdown invertiti per coerenza totale
- Valori ALTI = maligno, valori BASSI = benigno
- Calcolo semplificato senza inversioni nascoste
- Red flags logic aggiornata

### v3.5 (2024-11-26)
**📊 Malignancy Score Intuitivo**
- Score 0-100 invertito: 0=benigno, 100=maligno
- Formula: malignancyScore = 100 - benignityScore
- Interpretazione intuitiva allineata a standard medici

### v3.4 (2024-11-25)
**🔧 Fix Matematico Scoring**
- Risolto bug: totale 105/100 punti
- Sistema normalizzato: raw 0-105 → display 0-100
- Pesi Massi 2014 preservati
- Trasparenza calcolo con display raw + normalized

### v3.3 (2024-11-25)
**📚 Bibliografia & Genetica**
- Aggiunta bibliografia interattiva con 5 papers core
- Implementata stratificazione genetica Bastian 2014
- Sezione MAP3K8 con Newman 2019 e Houlier 2020
- BibTeX export per citazioni

### v3.0 - v3.2
**🎨 Core Features**
- Algoritmo morfologico base 9 criteri
- Calcolo score con red flags override
- UI responsiva con tooltips
- PDF export

---

## 👨‍⚕️ Autore

**Dr. Filippo Bianchi**  
Direttore SC Anatomia Patologica  
ASST Fatebenefratelli-Sacco, Milano

📧 Email: filippo.bianchi@asst-fbf-sacco.it  
💻 GitHub: [@infingardo](https://github.com/infingardo)  
🔗 LinkedIn: [Filippo Bianchi](https://linkedin.com/in/filippo-bianchi-pathology)

---

## ⚖️ Disclaimer

**⚠️ IMPORTANTE - LEGGERE ATTENTAMENTE**

Questo tool è un **ausilio decisionale** per patologi esperti e **NON sostituisce**:

- ❌ Esperienza clinica del patologo
- ❌ Correlazione clinico-patologica
- ❌ Revisione morfologica esperta
- ❌ Second opinion in casi difficili
- ❌ Giudizio diagnostico finale

**Il tool richiede:**
- ✅ Expertise in dermatopatologia
- ✅ Capacità di identificare morfologia spitzoide
- ✅ Conoscenza del contesto clinico
- ✅ Interpretazione critica dei risultati

**Validazione:**
- Tool basato su letteratura peer-reviewed
- Raccomandazione: validazione su casistica locale prima uso clinico routine
- Non approvato come dispositivo medico
- Solo per uso educativo e ricerca

**Responsabilità:**
- Diagnosi finale è sempre responsabilità del patologo refertante
- Tool non è sostituto di consulenza medica professionale
- Autore non assume responsabilità per uso inappropriato

---

## 📄 Licenza

**Educational Use Only**

Questo software è fornito "as is" per scopi educativi e di ricerca.  
Qualsiasi uso in contesto clinico richiede validazione locale.

Copyright (c) 2024 Dr. Filippo Bianchi

---

## 🙏 Ringraziamenti

- **Massi & LeBoit** per il framework morfologico sistematico
- **Boris Bastian** per la classificazione molecolare integrata
- **Newman, Houlier et al.** per gli studi MAP3K8
- **Comunità dermatopatologia** per feedback e suggerimenti

---

## 🔗 Link Utili

- 📖 [Massi & LeBoit 2014](https://link.springer.com/book/10.1007/978-3-642-37311-4) - Textbook morfologia
- 🧬 [Bastian 2014](https://doi.org/10.1146/annurev-pathol-012513-104658) - Review molecolare
- 🔬 [Newman 2019](https://doi.org/10.1038/s41591-019-0373-y) - MAP3K8 fusions
- 📊 [Houlier 2020](https://doi.org/10.1038/s41379-019-0384-8) - MAP3K8 morfologia-genetica

---

## 📞 Supporto & Feedback

Hai trovato un bug? Hai suggerimenti per migliorare il tool?

- 🐛 **Issues:** [GitHub Issues](https://github.com/infingardo/spitz-melanoma-tool/issues)
- 💬 **Discussioni:** [GitHub Discussions](https://github.com/infingardo/spitz-melanoma-tool/discussions)
- 📧 **Email:** filippo.bianchi@asst-fbf-sacco.it

---

<div align="center">

**Made with ❤️ for the dermatopathology community**

![Pathology](https://img.shields.io/badge/Pathology-Dermatopathology-ff69b4)
![Science](https://img.shields.io/badge/Science-Evidence--Based-blue)
![Open Source](https://img.shields.io/badge/Open-Source-success)

**⭐ Se trovi utile questo tool, considera di lasciare una star su GitHub! ⭐**

</div>
