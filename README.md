# 🧬 Filippo's Diagnostic Algorithm

**Spitz vs Melanoma: Morfologia + Genetica**

Strumento diagnostico interattivo per la stratificazione di lesioni melanocitiche spitzoidi, basato su approccio olistico (Massi & Leboit, 2016) e stratificazione genetica (Bastian 2024).

---

## 📋 Caratteristiche

### **Layer 1: Valutazione Morfologica (8 Gates)**

1. **Gate 0: Età del Paziente** *(FONDAMENTALE)*
   - Bias epidemiologico cruciale
   - < 20 anni: Spitz più probabile
   - > 60 anni: Melanoma più probabile
   - Warnings automatici in base all'età

2. **Gate 1: Asimmetria**
   - Simmetrica → Green flag
   - Marcata asimmetria → Red flag

3. **Gate 2: Maturazione A→B→C** *(CRITICAL)*
   - A = cellule piccole superficiali
   - B = cellule medie intermedie
   - C = cellule grandi profonde
   - Maturazione completa (>80%) → Green flag
   - Assente/invertita → Red flag

4. **Gate 3: Morfologia Citologica**
   - Uniformità vs pleomorfismo
   - Monomorfo → Green flag
   - Marcato pleomorfismo → Red flag

5. **Gate 4: Mitosi (Count + Location)**
   - Numero per mm²
   - Localizzazione: periferica vs profonda
   - Mitosi profonde = Red flag
   - Mitosi periferiche con count moderato = Green flag

6. **Gate 5: Atipie Mitotica** *(OVERRIDE)*
   - Mitosi atipiche presenti → **OVERRIDE a MELANOMA**
   - Criterio decisivo

7. **Gate 6: Infiltrazione**
   - Pattern di crescita
   - Circoscritto → Green flag
   - Marcatamente infiltrativo → Red flag

8. **Gate 7: IHC (Spreading Pattern)**
   - Spreading intraepidermico (S100, Melan-A, SOX10)
   - p16 status (perdita completa = Red flag)
   - Diffuso + p16 loss = **OVERRIDE a MELANOMA**

9. **Gate 8: Ki-67** *(Location Matters)*
   - Indice proliferativo %
   - Localizzazione: periferico vs profondo
   - Ki-67 alto profondo = Red flag
   - Ki-67 alto periferico = Green flag (growth phase OK)

### **Layer 2: Stratificazione Genetica (Bastian 2024)**

#### **SPITZ-LIKE Drivers (Low-Risk Biology)**
- ✅ HRAS-mutated → Zero-risk
- ✅ ALK fusion → Low-risk
- ✅ ROS1 fusion → Low-risk
- ✅ NTRK1/3 fusion → Low-risk (talvolta "Wiesner tumor")
- ✅ RET fusion → Low-risk
- ⚠️ BRAF-fusion → Eterogeneo (CNA-dipendente)

#### **RED FLAG Drivers (Melanoma-Like)**
- 🚨 MAP3K8 fusion → Aggressivo, melanoma-like
- 🚨 BRAF V600E/K → **MELANOMA** (genotipo definitivo)
- 🚨 NRAS Q61 → **MELANOMA**
- 🚨 NF1 loss → **MELANOMA**
- 🚨⚠️ **TERT promoter** → **CRITERIO DURO** (melanoma indipendentemente da morfo)
- 🚨⚠️ **CDKN2A loss** → **CRITERIO DURO** (melanoma-like behavior)

#### **CNA Profile**
- 🟢 Assente/Calmo → Profilo benigno
- 🟡 Limitati → AST low-risk (intermedio)
- 🚨 Complessi → Profilo aggressivo (melanoma-like)

#### **Reclassificazione Genetica**
- Genotipo **vince** sulla morfologia
- TERT promoter + CDKN2A loss = override definiti
- Risultato: diagnosi finale con stratificazione di rischio

---

## 🎯 Output Diagnostico

### **Morfologia**
- ✅ **SPITZ BENIGNO** (low-risk)
- ⚠️ **SPITZ ATIPICO** (intermediate-risk)
- ⚠️ **BORDERLINE** (requires expert review)
- 🚨 **MELANOMA PROBABILE** (high-risk)

### **Genetica (Bastian)**
- ✅ **SPITZ BENIGNO ZERO-RISK** (HRAS + CNA calmo)
- ✅ **SPITZ BENIGNO CON FUSIONE** (ALK/ROS1/RET + CNA calmo)
- ⚠️ **AST LOW-RISK** (CNA limitati + driver Spitz-like)
- 🚨 **MELANOMA SPITZOIDE** (TERT promoter / CDKN2A loss)
- 🚨 **MELANOMA** (BRAF V600 / NRAS Q61 / NF1)

### **Age Context Warnings**
- **< 20 anni + MELANOMA diagnosis** → "Melanoma rarissimo a questa età, riconsiderare Spitz/Wiesner"
- **> 60 anni + SPITZ diagnosis** → "Spitz raro in questa fascia, riconsiderare melanoma se de novo su sun-damaged skin"

---

## 📚 Metodologia

### **Approccio Olistico (Massi & Leboit, 2016)**
Valutazione sistematica secondo 8 gates sequenziali, basata su:
- Simmetria complessiva
- Maturazione citologica A→B→C (criterio dirimente)
- Pattern di infiltrazione
- Localizzazione delle atipie mitotiche

**Fonte**: Massi G, Leboit PE. *Histopathology of Cutaneous Melanoma and Other Melanocytic Lesions*. In: Ackerman AB, editor. *Ackerman's Pathology of the Skin*. 3rd ed. New York: Elsevier; 2016.

### **Stratificazione Genetica (Bastian 2024)**
Il genotipo decide il comportamento biologico, non la morfologia.
- Driver mutazionali: discriminano Spitz-like da melanoma-like
- CNA profile: integra il rischio biologico
- Criteri duri: TERT promoter, CDKN2A loss = melanoma indipendentemente da aspetto

**Fonte**: Bastian BC et al. Genomic classification of spitzoid tumors (2024).

---

## 🔧 Come Usare

### **Step 1: Compila Morfologia**
1. Seleziona **Età del paziente** (Gate 0)
2. Valuta i **Gates 1-8** sequenzialmente
3. Clicca **"Calcola Diagnosi Morfologica"**

### **Step 2: Rivedi Diagnosi Morfologica**
- Visualizza red/yellow/green flags
- Leggi age context warning
- **Se disponibile NGS:** procedi a Step 3

### **Step 3: Applica Stratificazione Genetica** *(opzionale)*
1. Clicca tab **"Genetica"**
2. Seleziona **Driver Mutazionale** (da pannello NGS)
3. Seleziona **CNA Profile** (da analisi genomica)
4. Clicca **"Applica Stratificazione Bastian"**

### **Step 4: Integra con Giudizio Clinico**
- Diagnosi finale = Morfologia + Genetica + Esperienza del patologo
- Non è un sistema diagnostico automatico
- Richiede interpretazione esperta

---

## ⚠️ Disclaimers Importanti

1. **Nessun algoritmo sostituisce l'esperienza del patologo**
2. La diagnosi finale richiede giudizio clinico integrato
3. L'età è un bias epidemiologico, non un criterio diagnostico assoluto
4. NGS è opzionale ma consigliato per casi borderline
5. Mitosi atipiche e TERT promoter sono criteri override definiti

---

## 🧬 Quando Usare Bastian

**Consigliato per:**
- Lesioni spitzoidi borderline (AST)
- Conflitto tra morfologia e sospetto clinico
- Giovani pazienti con lesioni melanoma-like
- Anziani con lesioni Spitz-like de novo

**Non necessario per:**
- Spitz classico, simmetrico, ben maturo
- Melanoma ovvio (asimmetrico, pleomorfo, high mitotic rate)

---

## 📱 Technical Details

- **HTML/CSS/JavaScript** (no external dependencies)
- **Responsive design** (desktop, tablet, mobile)
- **Light theme** (pale gray background, high readability)
- **Tab-based interface** (Morfologia / Genetica)
- **Real-time calculation** (no server-side processing)

---

## 🎓 Basato Su

- **Ackerman's Pathology of the Skin** (3rd Edition, 2016)
- **Massi & Leboit** (Holistic approach to spitzoid lesions)
- **Bastian BC et al.** (Genomic classification 2024)
- **Personalizzazione clinica**: Dr. Filippo Bianchi, Director SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano

---

## 📧 Contatti & Contributing

Strumento sviluppato per uso interno nella SC di Anatomia Patologica dell'ASST Fatebenefratelli-Sacco, Milano.

Per domande scientifiche sulla metodologia: consultare referenze indicate sopra.

---

## 📄 Licenza

Uso didattico e professionale nel contesto della pratica patologica. Non è un prodotto medico certificato.

---

**Ultimo aggiornamento**: Novembre 2025  
**Versione**: 1.0 (Light Theme)
