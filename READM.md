# 🔬 Spitz vs Melanoma Diagnostic Algorithm v3.4

**Algoritmo diagnostico pesato per lesioni melanocitiche spitzoidi**  
_Integrazione morfologia (Massi & LeBoit 2014) + genetica (Bastian 2014) + MAP3K8 (Newman/Houlier 2019-2020)_

---

## 📋 **Indice**

- [Overview](#overview)
- [Novità v3.4](#novità-v34)
- [Metodologia](#metodologia)
- [Bibliografia Scientifica](#bibliografia-scientifica)
- [Utilizzo](#utilizzo)
- [Interpretazione Scores](#interpretazione-scores)
- [Disclaimer](#disclaimer)
- [Autore](#autore)

---

## 🎯 **Overview**

Tool diagnostico HTML/JavaScript per la valutazione sistematica di lesioni melanocitiche con morfologia spitzoide. L'algoritmo integra:

1. **Criteri Morfologici** (9 parametri pesati) - Massi & LeBoit 2014
2. **Stratificazione Genetica Bastian 2014** - Driver mutations + CNA profiling
3. **Genomica MAP3K8** - Newman 2019, Houlier 2020
4. **Output Multimodale** - Scoring numerico + interpretazione qualitativa + PDF export

---

## 🆕 **Novità v3.4**

### **🔧 FIX MATEMATICO SCORING**

**PROBLEMA RISOLTO:** Somma max criteri era 105 punti, non 100 come dichiarato.

**SOLUZIONE:** Implementato **scoring normalizzato**:
- **Raw score:** 0-105 punti (somma effettiva criteri pesati)
- **Normalized score:** 0-100 (display e interpretazione)
- **Formula:** `normalized = Math.round((raw / 105) × 100)`

**Vantaggi:**
- ✅ Mantiene i pesi relativi basati su Massi 2014
- ✅ Interpretazione su scala standard 0-100
- ✅ Trasparenza matematica (mostra entrambi i valori)

### **Correzioni Bibliografiche v3.3**

- ✅ **Bastian 2014 (non 2024)**: Corretto errore citazione
- ✅ **Terminologia "Criteri Solidi"**: Sostituito "criterio duro" con "criterio solido"
- ✅ **Massi & LeBoit 2014**: Corretto "2016 Ackerman's 3rd Edition" → "2014 Springer 2nd Edition"

### **Features v3.3**

- 📚 **Bibliografia Interattiva**: Tab dedicato con cards espandibili, filtri per categoria, search box
- 🔗 **Tooltips Linked**: Ogni criterio diagnostico linka direttamente alla citazione scientifica
- 📄 **Export BibTeX**: Un-click export per reference managers
- 🧬 **Genomica MAP3K8**: Analisi completa con dati Newman 2019 + Houlier 2020

---

## 🧪 **Metodologia**

### **1. Sistema di Scoring Morfologico**

**Raw Scoring (somma criteri pesati):**

| Criterio | Peso | Range | Fonte |
|----------|------|-------|-------|
| **Maturazione A→B→C** | Critico (x3) | 0-20 | Massi Cap. 4 |
| **Simmetria** | Alto (x2) | 0-15 | Massi Gates 0-1 |
| **Circoscrizione** | Alto (x2) | 0-15 | Massi Gates 2-3 |
| **Mitosi derma profondo** | Alto (x2) | 0-15 | Massi Gate 6 |
| **Cellule giganti multinucleate** | Medio | 0-10 | Massi pag 127 |
| **Infiltrazione pattern** | Medio | 0-10 | Massi Gate 7 |
| **Atipia nucleare** | Medio | 0-10 | Massi Gate 4 |
| **Necrosi** | Basso | 0-5 | Massi pag 131 |
| **Ulcerazione** | Basso | 0-5 | Massi AST features |
| **TOTALE RAW** | | **0-105** | |

**Normalizzazione a 0-100:**
```javascript
normalized_score = Math.round((raw_total / 105) × 100)
```

**Razionale Pesi:**
- **Maturazione (20pt):** Criterio DIRIMENTE per Spitz vs melanoma
- **Mitosi/Simmetria/Circoscrizione (15pt):** Criteri maggiori Gates approach
- **Altri criteri (5-10pt):** Features supportive/modifiers

### **2. Stratificazione Genetica Bastian 2014**

**Driver Mutations** (Annual Review of Pathology 2014, Vol 9:239-271):

| Alterazione | Frequenza | Comportamento | Riferimento |
|-------------|-----------|---------------|-------------|
| **HRAS mutation** | ~20% Spitz | Low-risk, gain 11p | Bastian pag 254 |
| **Kinase fusions** (ALK/ROS1/RET/NTRK1/BRAF) | ~60% Spitz | Low-intermediate | Bastian pag 254 |
| **MAP3K8 fusion/truncation** | 33% pediatrico | Variabile, MEK-targetable | Newman 2019, Houlier 2020 |
| **BRAF V600E + BAP1 loss** | Rare | "Not clear-cut melanoma" | Bastian pag 254 |
| **TERT promoter** | 85% metastasi, 0% nevi | **Criterio solido malignità** | Bastian pag 250-251 |
| **GNAQ/GNA11 Q209** | Blue nevi, uveal | Non-Spitz context | Bastian pag 262-263 |

**CNA Profiling:**
- **Single gain (11p)**: Low-risk, tipico HRAS-Spitz
- **Multiple CNAs**: Red flag, instabilità genomica (avg 5 amplifications in acral/mucosal melanomas)
- **Chromosome 6 loss**: Established marker malignità

**⚠️ NOTA CRITICA:** 
Bastian 2014 **NON stabilisce "criteri solidi override"**. TERT è "emerging as critical barrier" nella progressione maligna ma richiede **correlazione clinico-patologica**. CDKN2A loss è evento secondario presente anche in AST, **non diagnostico da solo** (Table 3, pag 243-244).

### **3. Genomica MAP3K8**

**Newman et al. 2019** (Nature Medicine 25:597-602):
- MAP3K8 fusions/truncations in **33% melanomi spitzoidi pediatrici**
- Driver genetico più comune in questa popolazione
- **Target terapeutico**: Risposta clinica a MEK inhibitors
- PMID: 30988516, DOI: 10.1038/s41591-019-0373-y

**Houlier et al. 2020** (Modern Pathology 33:846-857):
- Serie 33 casi MAP3K8-fused con correlazioni morfologiche-genetiche
- **CDKN2A inactivation**: 77% casi atipici/maligni (vs 23% benigni)
- **Features morfologiche**: Ulcerazione 32%, giant multinucleated cells
- **Partner 3' più comune**: SVIL (46%), seguito da NCOA1/2 (18%)
- **MAP3K8 expression**: Significativamente elevata vs altri kinase fusions
- **Età media**: 30 anni (range 10-76)
- **Sede preferenziale**: Arti inferiori (55%)
- PMID: 31719662, DOI: 10.1038/s41379-019-0384-8

---

## 📚 **Bibliografia Scientifica**

### **Core References**

1. **Bastian BC** (2014). The Molecular Pathology of Melanoma: An Integrated Taxonomy of Melanocytic Neoplasia. _Annual Review of Pathology: Mechanisms of Disease_ **9**:239-271.  
   DOI: [10.1146/annurev-pathol-012513-104658](https://doi.org/10.1146/annurev-pathol-012513-104658) | PMID: 24460189  
   **Key:** Framework tassonomico melanomi, TERT come criterio solido, HRAS/kinase fusions profiling

2. **Massi G, LeBoit PE** (2014). _Histological Diagnosis of Nevi and Melanoma_ (2nd Edition). Springer, Berlin Heidelberg.  
   ISBN: 978-3-642-37310-7 | DOI: [10.1007/978-3-642-37311-4](https://doi.org/10.1007/978-3-642-37311-4)  
   **Key:** Textbook gold-standard morfologia, Gates 0-8 approach, maturazione A→B→C

3. **Newman S, Fan L, Pribnow A, et al.** (2019). Clinical genome sequencing uncovers potentially targetable truncations and fusions of MAP3K8 in spitzoid and other melanomas. _Nature Medicine_ **25**:597-602.  
   DOI: [10.1038/s41591-019-0373-y](https://doi.org/10.1038/s41591-019-0373-y)  
   **Key:** MAP3K8 in 33% pediatric spitzoid melanomas, MEK inhibitor response

4. **Houlier A, Pissaloux D, Masse I, et al.** (2020). Melanocytic tumors with MAP3K8 fusions: report of 33 cases with morphological-genetic correlations. _Modern Pathology_ **33**:846-857.  
   DOI: [10.1038/s41379-019-0384-8](https://doi.org/10.1038/s41379-019-0384-8) | PMID: 31719662  
   **Key:** 77% CDKN2A loss in atipici/maligni, SVIL partner più comune, ulcerazione 32%

### **Additional Literature**

5. **Raghavan SS, Peternel S, Mully TW, et al.** (2020). Spitz melanoma is a distinct subset of spitzoid melanoma. _Modern Pathology_ **33**:1122-1134.  
   DOI: [10.1038/s41379-019-0445-z](https://doi.org/10.1038/s41379-019-0445-z)  
   **Key:** Solo 36% "spitzoid melanomas" ha alterazioni genetiche caratteristiche Spitz (HRAS/fusion)

6. **Newman S, Rosenbach M, Chu EY, et al.** (2019). Pediatric spitzoid melanoma with MAP3K8 fusion. _American Journal of Surgical Pathology_ **43**(9):1631-1637.  
   PMID: 31498175  
   **Key:** Cohort pediatrico, 82% p16 loss, 70% homozygous CDKN2A deletion

---

## 🖥️ **Utilizzo**

### **Installazione**

```bash
# Clone repository
git clone https://github.com/infingardo/spitz-melanoma-tool.git
cd spitz-melanoma-tool

# Open in browser
open index.html
# oppure
python -m http.server 8000  # http://localhost:8000
```

### **Workflow Diagnostico**

1. **Input Morfologico**: Compilare 9 criteri morfologici con dropdown
2. **Input Genetico**: Selezionare driver mutation + CNA profile (se disponibile)
3. **Calcolo Automatico**: Score normalizzato 0-100 + raw 0-105 + interpretazione Bastian
4. **Interpretazione**:
   - **Tab Morfologia**: Breakdown scores + red flags + formula normalizzazione
   - **Tab Genetica**: Stratificazione Bastian + comportamento biologico atteso
   - **Tab Sommario**: Interpretazione integrata + raccomandazioni
   - **Tab Bibliografia**: Citazioni complete + key findings + export BibTeX
5. **Export PDF**: Report clinico completo con timestamp

---

## 📊 **Interpretazione Scores**

### **Score Normalizzato (0-100)**

| Range | Diagnosi Suggerita | Azione Raccomandata |
|-------|-------------------|---------------------|
| **0-30** | Spitz Nevus | Follow-up clinico routine |
| **31-50** | Atypical Spitz Tumor (AST) | Excision completa + follow-up stretto |
| **51-70** | AST with concerning features | Genomica raccomandata, consider sentinel node |
| **71-100** | Spitzoid Melanoma | Staging completo + genetica + team MDT |

### **Red Flags Override**

- ❌ **Maturazione assente** (0-5 punti)
- ❌ **Mitosi ≥6/mm² derma profondo**
- ❌ **Necrosi "en masse"**
- ❌ **TERT promoter mutation** (criterio solido: 85% metastasi vs 0% nevi)
- ❌ **Multiple CNAs** (instabilità genomica)

### **Green Flags Supportive**

- ✅ **Maturazione completa A→B→C** (16-20 punti)
- ✅ **HRAS + single gain 11p** (low-risk profile)
- ✅ **Kinase fusion isolata** (ALK, ROS1, RET, NTRK1)
- ✅ **Simmetria perfetta** + **circoscrizione netta**

---

## ⚠️ **Disclaimer**

### **Limitazioni dell'Algoritmo**

1. **Non sostituisce l'esperienza del patologo**: Tool è **ausilio decisionale**, non diagnostica automatica
2. **Richiede expertise morfologica**: Interpretazione criteri richiede training in dermatopatologia
3. **Genomica complementare, non sostitutiva**: TERT/CNA sono "criteri solidi" ma richiedono **correlazione clinico-patologica**
4. **Dati molecolari non sempre disponibili**: Algoritmo funziona anche con sola morfologia (modalità degradata)
5. **Popolazione pediatrica**: Comportamento biologico può differire da adulti (Newman 2019)
6. **Follow-up critico**: Anche score bassi richiedono excision completa + follow-up clinico

### **Uso Appropriato**

✅ **Usare per:**
- Sistematizzare valutazione morfologica
- Documentare razionale diagnostico
- Teaching/training residents
- Discussione MDT con oncologi

❌ **NON usare per:**
- Diagnosi automatica senza revisione vetrini
- Sostituire second opinion su casi difficili
- Decision-making terapeutico senza conferma istologica
- Bypass expertise dermatopatologia

### **Validazione Richiesta**

Tool **NON è validato** su coorti cliniche prospettiche. Rappresenta:
- Sistematizzazione letteratura (Massi 2014, Bastian 2014, Newman/Houlier 2019-2020)
- Algoritmo pesato basato su expert consensus
- Framework educazionale per training

⚠️ **Prima di uso clinico routine**: Validare su casistica locale, confrontare con diagnosi gold-standard, monitorare outcome follow-up.

---

## 👨‍⚕️ **Autore**

**Dr. Filippo Bianchi**  
Direttore SC Anatomia Patologica  
ASST Fatebenefratelli-Sacco, Milano

📧 Email: filippo.bianchi@asst-fbf-sacco.it  
💻 GitHub: [infingardo](https://github.com/infingardo)  
🔬 Expertise: Digital Pathology, IBD Diagnostics, Dermatopathology, Hematopathology

---

## 📝 **Changelog**

### **v3.4** (2024-11-26)
- 🔧 **FIX MATEMATICO:** Scoring normalizzato 0-100 da raw 0-105
- ✅ Display trasparente: mostra entrambi normalized e raw score
- ✅ Formula: `normalized = round((raw / 105) × 100)`
- ✅ Breakdown table aggiornato con riga totali

### **v3.3** (2024-11-25)
- ✅ Correzione citazione Bastian 2024 → 2014
- ✅ Terminologia "criterio duro" → "criterio solido"
- ✅ Correzione Massi & LeBoit (2014 Springer, non 2016 Ackerman's)
- ✅ Bibliografia interattiva con filtri + search + export BibTeX
- ✅ Tooltips linked a citazioni scientifiche
- ✅ Genomica MAP3K8 completa (Newman 2019, Houlier 2020)

### **v3.2** (2024-11-20)
- Implementazione Bastian stratification completa
- CNA profiling + TERT criterio solido
- PDF export funzionale

### **v3.1** (2024-11-15)
- Sistema pesatura morfologica ottimizzato
- Red/green flags logic
- Multi-tab result panel

### **v3.0** (2024-11-10)
- Algoritmo pesato morfologia + genetica
- Framework Massi & LeBoit 2014
- First release

---

## 📄 **Licenza**

MIT License - Free for educational and clinical use.  
Citation appreciated: "Filippo's Spitz Diagnostic Algorithm v3.4 (2024)"

---

## 🙏 **Acknowledgments**

- **Boris Bastian** per il framework tassonomico melanomi (Annu Rev Pathol 2014)
- **Guido Massi & Philip LeBoit** per il textbook gold-standard morfologia (Springer 2014)
- **Scott Newman, Aurelie Houlier** et al. per i breakthrough studies su MAP3K8 (2019-2020)
- **Community dermatopatologi** per feedback iterativo su algoritmo

---

**Last Update:** November 26, 2024  
**Version:** 3.4  
**Status:** ✅ Scoring matematicamente corretto, pronto per deployment
