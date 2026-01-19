# 🔬 Spitz vs Melanoma Diagnostic Algorithm v3.6.9

**Algoritmo diagnostico integrato per la stratificazione del rischio nelle lesioni melanocitiche spitzoidi**

[![Version](https://img.shields.io/badge/version-3.6.9-blue.svg)](https://github.com/infingardo/spitz-melanoma-tool)
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
- [Novità v3.6.8](#-novità-v368)
- [Bibliografia](#-bibliografia)
- [Changelog](#-changelog)
- [Autore](#-autore)
- [Disclaimer](#-disclaimer)

---

## 🎯 Panoramica

Tool diagnostico web-based per la **stratificazione del rischio** nelle lesioni melanocitiche con **morfologia spitzoide confermata**. Integra criteri morfologici (Massi & LeBoit 2014) e genetici (Bastian 2014) per distinguere Spitz nevus benigno, Atypical Spitz Tumor (AST) e Spitzoid Melanoma.

### Cosa FA questo tool
- ✅ Rende esplicito e documentabile il ragionamento diagnostico
- ✅ Standardizza la valutazione morfologica su 9 criteri pesati
- ✅ Integra dati genetici quando disponibili
- ✅ Genera un report difendibile

### Cosa NON FA questo tool
- ❌ Non sostituisce il giudizio del patologo esperto
- ❌ Non determina la diagnosi in isolamento
- ❌ Non si applica a lesioni non-spitzoidi

---

## ⚖️ Principio Guida

> **"Lo score supporta e documenta il ragionamento diagnostico, non lo sostituisce. Un valore elevato rafforza l'ipotesi di malignità nel contesto clinico-patologico appropriato; non la determina in isolamento."**

Questa frase compare in tre punti del tool: disclaimer iniziale, summary, footer. Non è retorica — è il principio medico-legale su cui si fonda l'intero progetto.

---

## ⚡ Quick Start

```bash
# Download
git clone https://github.com/infingardo/spitz-melanoma-tool.git
cd spitz-melanoma-tool

# Apri nel browser
open index.html
```

**Oppure online:** [https://infingardo.github.io/spitz-melanoma-tool/](https://infingardo.github.io/spitz-melanoma-tool/)

**Nessuna installazione richiesta** — funziona offline!

---

## ⚠️ Prerequisiti

### 🔴 LEGGERE PRIMA DELL'USO

Questo tool è applicabile **ESCLUSIVAMENTE** a lesioni con **morfologia SPITZOIDE confermata**:

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

Il tool include una **sezione DD interattiva** che aiuta a distinguere lesioni spitzoidi da nevi comuni:

| Caratteristica | LESIONI SPITZOIDI ✅ | NEVI COMUNI ❌ |
|----------------|---------------------|----------------|
| **Citologia** | Cellule epitelioidi/fusate grandi | Piccole cellule rotonde/ovali |
| **Nuclei** | Vescicolosi con nucleoli prominenti | Piccoli, regolari, condensati |
| **Cellule giganti** | Spesso presenti | Assenti |
| **Maturazione** | Variabile | Sempre presente A→B→C |

### 💡 Rule of Thumb

> *"Se vedi cellule grandi/strane → probabilmente spitzoide → USA IL TOOL"*
>
> *"Se pensi 'nevo banale' → NON usare il tool"*

---

## ✨ Caratteristiche

### 📊 Malignancy Score 0-100

Sistema intuitivo:
- **Selezioni BASSE** nei dropdown → Score BASSO → Benigno
- **Selezioni ALTE** nei dropdown → Score ALTO → Maligno

### 🔬 Flag Biopsia Parziale (v3.6.7+)

Per shave, punch, o biopsie incisionali:
- Esclude automaticamente **Simmetria** e **Circoscrizione** dal calcolo
- Ricalcola il max score (73 invece di 103)
- Mostra warning dedicato nel report

### 🧬 9 Criteri Morfologici (Massi & LeBoit 2014)

| Criterio | Range | Note |
|----------|-------|------|
| **Maturazione A→B→C** | 0-20 | 🎯 Criterio più importante |
| **Simmetria** | 0-15 | N/A su biopsia parziale |
| **Circoscrizione** | 0-15 | N/A su biopsia parziale |
| **Cellule giganti** | 0-8 | Assenza non patognomonica |
| **Mitosi derma profondo** | 0-15 | Hot spot count (WHO-style) |
| **Pattern infiltrazione** | 0-10 | |
| **Necrosi** | 0-5 | |
| **Atipia nucleare** | 0-10 | ⚠️ Non sopravvalutare |
| **Ulcerazione** | 0-5 | |

**Totale:** 0-103 punti → normalizzato a 0-100

### 🧪 Stratificazione Genetica (Bastian 2014)

- **HRAS mutation** → Low-risk
- **Kinase fusions** (ALK, ROS1, RET, NTRK1, BRAF) → Low-to-intermediate
- **MAP3K8** → Variabile; ⚠️ se + multiple CNAs → alto rischio
- **TERT promoter** → Criterio solido malignità (non override assoluto)
- **CDKN2A loss isolato** → NON diagnostico da solo

### 🚨 Red Flags Automatici

Override automatico a "Spitzoid Melanoma" se:
- Maturazione assente/invertita (≥16 punti)
- Mitosi ≥6/mm² e/o atipiche (≥12 punti)
- Necrosi "en masse" (5 punti)

---

## 🔬 Metodologia Scientifica

### Definizione Operativa della Maturazione (v3.6.8)

La maturazione **non è solo "cellule più piccole in profondità"**. Richiede la riduzione progressiva di tre componenti:

1. **Dimensioni cellulari** (da grandi a piccole)
2. **Volume citoplasmatico** (da abbondante a scarso)
3. **Attività mitotica** (da presente a assente in profondità)

### Conta Mitosi: Hot Spot (WHO-style)

> Contare nell'area di **1 mm² con maggior densità mitotica** nel derma profondo.
> **NON fare la media** su più campi.

### Warning Atipia (v3.6.8)

> **⚠️ Atipia senza perdita di maturazione ≠ melanoma**
>
> Molti Spitz benigni hanno nuclei grandi e "strani" — è la perdita di maturazione che conta, non l'atipia isolata.

---

## 🆕 Novità v3.6.8 / v3.6.9

### v3.6.9 - Framework Filosofico
- **Bibliografia Urso** (2019, 2020): framework driver/promoter mutations
- **Nota Ackerman** nel summary per score intermedi: "il nevo, il melanoma, e il non lo so"
- Il territorio intermedio (score 31-70) non è un fallimento diagnostico — è la risposta corretta

### v3.6.8 - Tooltip Operativi
- **Maturazione:** definizione tripartita (dimensionale + citoplasmatica + mitotica)
- **Mitosi:** esplicito "hot spot count (WHO-style)"
- **Atipia:** warning educativo per evitare sovradiagnosi

### MAP3K8 + Multiple CNAs
Warning specifico nel summary: combinazione qualitativamente diversa da MAP3K8 isolato, comportamento biologico più aggressivo atteso.

### Frase Medico-Legale Rafforzata
Presente in 3 punti: disclaimer, summary box, footer.

---

## 📚 Bibliografia

### Core References

1. **Bastian BC** (2014). The Molecular Pathology of Melanoma: An Integrated Taxonomy of Melanocytic Neoplasia. *Annual Review of Pathology* 9:239-271. [DOI](https://doi.org/10.1146/annurev-pathol-012513-104658) | PMID: 24460189

2. **Massi G, LeBoit PE** (2014). *Histological Diagnosis of Nevi and Melanoma* (2nd Edition). Springer. ISBN: 978-3-642-37310-7

3. **Newman S et al.** (2019). Clinical genome sequencing uncovers potentially targetable truncations and fusions of MAP3K8. *Nature Medicine* 25:597-602. [DOI](https://doi.org/10.1038/s41591-019-0373-y) | PMID: 30988516

4. **Newman S et al.** (2019). Pediatric spitzoid melanoma with MAP3K8 fusion. *Am J Surg Pathol* 43(9):1631-1637. PMID: 31498175

5. **Houlier A et al.** (2020). Melanocytic tumors with MAP3K8 fusions. *Modern Pathology* 33:846-857. [DOI](https://doi.org/10.1038/s41379-019-0384-8) | PMID: 31719662

6. **Raghavan SS et al.** (2020). Spitz melanoma is a distinct subset of spitzoid melanoma. *Modern Pathology* 33:1122-1134. [DOI](https://doi.org/10.1038/s41379-019-0445-z) | PMID: 31857696

7. **Urso C** (2019). Melanocytic skin neoplasms: what lesson from genomic aberrations? *Am J Dermatopathol* 41:623-629. PMID: 30585798

8. **Urso C** (2020). La rivoluzione della genetica nelle lesioni melanocitiche. *Dermatopatologia Forum*. Centro Studi Dermatopatologia di Firenze.

### Framework Concettuale

> *"Nevo, neoplasia borderline e melanoma non sono tre neoplasie diverse, ma tre successivi stati genetici dello stesso processo neoplastico."* — **Urso 2019**

> *"Esistono solo 3 tipi di lesioni pigmentate: il nevo, il melanoma, e il non lo so."* — **Bernard Ackerman**

---

## 📝 Changelog

### v3.6.9 (2025-01-19) - Current
- ✅ Bibliografia: Urso 2019 + Urso 2020 (framework driver/promoter)
- ✅ Nota Ackerman nel summary per score 31-70: "il non lo so"
- ✅ Giustificazione filosofica del territorio intermedio

### v3.6.8 (2025-01-19)
- ✅ Tooltip maturazione: definizione operativa tripartita
- ✅ Tooltip mitosi: hot spot count (WHO-style)
- ✅ Tooltip atipia: warning educativo
- ✅ MAP3K8 + multiple CNAs: warning specifico
- ✅ Frase medico-legale in 3 punti

### v3.6.7 (2025-01-19)
- ✅ Flag biopsia parziale (esclude simmetria/circoscrizione)
- ✅ Tooltip maturazione didattico (A→B→C)
- ✅ Box "Ruolo del patologo" nel summary

### v3.6.6 (2024-12-06)
- Caveat medico-legali
- SNB limitazioni
- Warning overconfidence

### v3.6.5 (2024-12-06)
- Fix linguistici
- showBibCard() refactored

### v3.6.4 (2024-11-28)
- Giant cells: max 8 punti (era 10)
- Wording red flag mitosi
- Pulizia documentazione

[Changelog completo nel repository]

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

### ⚠️ IMPORTANTE

Questo tool è un **ausilio decisionale** per patologi esperti e **NON sostituisce**:

- ❌ Esperienza clinica del patologo
- ❌ Correlazione clinico-patologica
- ❌ Revisione morfologica esperta
- ❌ Second opinion in casi difficili

### Validazione

- Tool basato su letteratura peer-reviewed
- **Raccomandazione:** validazione su casistica locale prima dell'uso clinico
- Non approvato come dispositivo medico
- Solo per uso educativo e ricerca

### Principio Medico-Legale

> *"Lo score supporta e documenta il ragionamento diagnostico, non lo sostituisce. Un valore elevato rafforza l'ipotesi di malignità nel contesto clinico-patologico appropriato; non la determina in isolamento."*

---

## 📄 Licenza

**Educational Use Only**

Copyright (c) 2024-2025 Dr. Filippo Bianchi

---

<div align="center">

**Made with ❤️ for the dermatopathology community**

*Con il supporto di Claude (Anthropic) e GPT (OpenAI) — perché anche le AI collaborano*

**⭐ Se trovi utile questo tool, considera di lasciare una star su GitHub! ⭐**

</div>
