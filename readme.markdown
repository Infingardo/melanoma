# 🔬 Algoritmo Diagnostico: Lesioni Melanocitiche

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/infingardo/melanocytic-lesions-algorithm)
[![License](https://img.shields.io/badge/license-Educational%20Use-green.svg)](LICENSE)
[![Last Update](https://img.shields.io/badge/updated-January%202025-orange.svg)](https://github.com/infingardo/melanocytic-lesions-algorithm)
[![Bibliography](https://img.shields.io/badge/bibliography-2020--2025-purple.svg)](https://github.com/infingardo/melanocytic-lesions-algorithm#bibliografia)

> **Strumento diagnostico evidence-based per la diagnosi differenziale tra nevo comune, nevo di Spitz (tipico/atipico) e melanoma, basato su criteri istologici e immunoistochimici.**

[🚀 **Demo Live**](https://infingardo.github.io/melanocytic-lesions-algorithm/) | [📖 **Documentazione**](#features) | [🤝 **Contribuisci**](#contributing)

---

## 📋 Indice

- [Overview](#overview)
- [Features Principali](#features-principali)
- [Screenshot](#screenshot)
- [Quick Start](#quick-start)
- [Metodologia Diagnostica](#metodologia-diagnostica)
- [Bibliografia Scientifica](#bibliografia-scientifica)
- [Tecnologie](#tecnologie)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Disclaimer](#disclaimer)
- [Licenza](#licenza)
- [Contatti](#contatti)

---

## 🎯 Overview

La diagnosi differenziale tra **nevo comune**, **nevo di Spitz** (incluse varianti atipiche/borderline) e **melanoma** rappresenta una delle sfide più complesse in dermatopatologia moderna. Questo strumento digitale implementa un algoritmo diagnostico multiparametrico che integra:

- ✅ **Criteri clinico-anamnestici** (età, storia della lesione)
- ✅ **Valutazione istologica H&E** (architettura, citologia, attività proliferativa)
- ✅ **Panel immunoistochimico core** (PRAME, p16, Ki-67, HMB-45)
- ✅ **Marcatori molecolari avanzati** (fusioni chinasiche, BRAF V600E)
- ✅ **Sistema di scoring quantitativo** con red flags automatici
- ✅ **Raccomandazioni terapeutiche personalizzate**

### 🎓 Target Audience

- Dermatopatologi e anatomopatologi
- Dermatologi clinici
- Specializzandi in dermatologia e anatomia patologica
- Ricercatori in oncologia dermatologica
- Studenti di medicina (anni clinici)

---

## ✨ Features Principali

### 🔍 Algoritmo Diagnostico a 4 Step

1. **Step 1: Valutazione Clinico-Anamnestica**
   - Età del paziente (criterio prognostico cruciale)
   - Storia naturale della lesione
   - Fattori di rischio

2. **Step 2: Valutazione Istologica (H&E)**
   - **Architettura** (40% peso diagnostico): simmetria, maturazione, pattern pagetoide
   - **Citologia** (30% peso diagnostico): pleomorfismo, corpi di Kamino, nucleoli
   - **Attività Proliferativa** (30% peso): mitosi/mm², mitosi atipiche, ulcerazione

3. **Step 3: Panel Immunoistochimico CORE**
   - **PRAME**: sensibilità 67-94%, specificità 94.3%
   - **p16 (CDKN2A)**: perdita nel 70% melanomi
   - **Ki-67**: indice proliferativo (cut-off >15-20% per melanoma)
   - **HMB-45**: pattern di espressione (gradiente vs diffuso)

4. **Step 4: Marcatori Molecolari Avanzati**
   - Fusioni chinasiche (ALK, ROS1, NTRK1, RET) → 60% nevi di Spitz
   - BRAF V600E → 50% melanomi

### 📊 Sistema di Scoring Intelligente

- **Calcolo automatico** di score Spitz vs Melanoma
- **Identificazione automatica RED FLAGS critici**:
  - Mitosi atipiche presenti
  - PRAME >50% + p16 perdita (specificità 100% melanoma)
  - Ulcerazione
  - Mitosi ≥6/mm²
- **5 categorie diagnostiche**:
  - ✅ Nevo di Spitz benigno
  - ✅ Nevo di Spitz probabile
  - ⚠️ Tumore di Spitz Atipico (MELTUMP)
  - 🚨 Melanoma probabile
  - 🚨 Melanoma ad alta probabilità

### 💾 Export & Documentation

- **Salva Referto (TXT)**: export completo formattato con timestamp
- **Stampa ottimizzata**: layout pulito per documentazione cartacea
- **Bibliografia cliccabile**: link diretti a 15+ articoli chiave (2020-2025)

### 🎨 User Experience

- Design moderno e professionale (gradient UI)
- Responsive per desktop, tablet, mobile
- Tooltips informativi sui criteri diagnostici
- Feedback visivo su selezioni
- Keyboard shortcuts (Ctrl+Enter calcola, Ctrl+R reset)
- Accessibilità ottimizzata

---

## 📸 Screenshot

> *Aggiungi qui screenshots dell'interfaccia principale e del report diagnostico*

![Main Interface](screenshots/main-interface.png)
![Diagnostic Report](screenshots/diagnostic-report.png)
![Bibliography Section](screenshots/bibliography.png)

---

## 🚀 Quick Start

### Opzione 1: Uso Online (Raccomandato)

Accedi direttamente alla **[Demo Live](https://infingardo.github.io/melanocytic-lesions-algorithm/)** - nessuna installazione richiesta!

### Opzione 2: Uso Locale
```bash
# Clone repository
git clone https://github.com/infingardo/melanocytic-lesions-algorithm.git

# Apri index.html nel browser
cd melanocytic-lesions-algorithm
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux@software{melanocytic_lesions_algorithm,
  author = {Bianchi, Filippo},
  title = {Algoritmo Diagnostico per Lesioni Melanocitiche: Nevo vs Spitz vs Melanoma},
  year = {2025},
  institution = {SC Anatomia Patologica, Ospedale Fatebenefratelli, Milano},
  version = {1.0.0},
  url = {https://github.com/infingardo/melanocytic-lesions-algorithm},
  note = {Evidence-based diagnostic tool. Bibliography: 2020-2025}
}