# 📚 Guida alla Documentazione - Spitz vs Melanoma Tool

## 🎯 Cosa Leggere in Base alle Tue Esigenze

### 🚀 Voglio INIZIARE SUBITO (5 minuti)
Leggi nell'ordine:
1. **QUICK_START.md** ← Parti da qui!
2. Apri **index.html** nel browser
3. Fatto! ✅

---

### 📖 Voglio CAPIRE il Tool (15 minuti)
Leggi nell'ordine:
1. **START_HERE.md** - Overview generale
2. **README.md** - Documentazione completa
3. Sezione "🔍 DD" nel tool - Diagnosi differenziale
4. Prova con un caso test!

---

### 🔬 Sono un PATOLOGO e voglio usarlo in pratica
Leggi:
1. **README.md** - Sezione "Prerequisiti" e "Utilizzo"
2. **FINALE_v3.6.2.md** - Features complete
3. Apri tool → Leggi warning box + DD section
4. Test su 2-3 casi prima uso routine

**Importante:** Valida su casistica locale!

---

### 💻 Sono uno SVILUPPATORE
Leggi:
1. **README.md** - Architettura generale
2. **FINALE_v3.6.2.md** - Dettagli tecnici v3.6.2
3. **CHANGELOG_v3.5.md** - Storia versioni precedenti
4. **COMMIT_MESSAGE_v3.6.2.txt** - Breaking changes v3.6
5. Codice sorgente **index.html** con commenti

---

### 🐛 Ho trovato un BUG o serve FIX
Leggi:
1. **RIEPILOGO_FIX_v3.4.md** - Storia fix matematici
2. **SCORING_FIX_INSTRUCTIONS.md** - Istruzioni applicazione fix
3. **fix_scoring.js** - Funzioni standalone corrette

Poi:
- Apri issue su GitHub
- Email: filippo.bianchi@asst-fbf-sacco.it

---

### 📝 Voglio fare un COMMIT su Git
Usa:
- **COMMIT_MESSAGE_v3.6.2.txt** - Template commit message v3.6.2
- **COMMIT_MESSAGE_v3.6.txt** - Template per v3.6
- **COMMIT_MESSAGE_v3.5.txt** - Template per v3.5
- **COMMIT_MESSAGE_v3.4.txt** - Template per v3.4

---

### 🎓 Voglio INSEGNARE il tool a colleghi
Materiali didattici:
1. **README.md** - Sezione "Diagnosi Differenziale"
2. **QUICK_START.md** - Handout per workshop
3. Tool → Sezione "🔍 DD" - Tabella comparativa
4. **FINALE_v3.6.2.md** - Spiegazione metodologia

**Tip:** Usa tabella DD per casi teaching!

---

## 📂 Struttura Completa File

```
/outputs/
│
├── 🎯 INIZIO QUI
│   ├── QUICK_START.md          ← 5 minuti, parti da qui!
│   ├── START_HERE.md           ← Overview rapida
│   └── index.html              ← Tool principale (74 KB)
│
├── 📖 DOCUMENTAZIONE PRINCIPALE
│   ├── README.md               ← Guida completa (14 KB)
│   └── FINALE_v3.6.2.md        ← Features v3.6.2 (3.8 KB)
│
├── 📚 DOCUMENTAZIONE VERSIONI PRECEDENTI
│   ├── FINALE_v3.6.md          ← Inversione dropdown (5.2 KB)
│   ├── FINALE_v3.5.md          ← Malignancy score (4.8 KB)
│   ├── README_v3.4.md          ← Fix matematico (13 KB)
│   ├── RIEPILOGO_FIX_v3.4.md   ← Storia fix (6.3 KB)
│   ├── CHANGELOG_v3.5.md       ← Changelog (4.2 KB)
│   └── SCORING_FIX_INSTRUCTIONS.md ← Istruzioni fix (7.7 KB)
│
├── 💻 FILE TECNICI
│   ├── fix_scoring.js          ← Funzioni JavaScript (6.0 KB)
│   ├── COMMIT_MESSAGE_v3.6.2.txt ← Git commit v3.6.2 (2.8 KB)
│   ├── COMMIT_MESSAGE_v3.6.txt   ← Git commit v3.6 (2.1 KB)
│   ├── COMMIT_MESSAGE_v3.5.txt   ← Git commit v3.5 (1.6 KB)
│   └── COMMIT_MESSAGE_v3.4.txt   ← Git commit v3.4 (1.6 KB)
│
└── 📚 QUESTO FILE
    └── INDEX.md                ← Navigazione documentazione
```

---

## 🎯 Raccomandazioni per Tipo di Utente

### 👨‍⚕️ Patologo Esperto
**Leggi:** README.md (solo sezioni Prerequisiti, Utilizzo, Disclaimer)  
**Tempo:** 10 minuti  
**Poi:** Testa su 2-3 casi noti prima uso routine

### 👩‍⚕️ Specializzando Anatomia Patologica
**Leggi:** QUICK_START.md + README.md completo + DD section  
**Tempo:** 30 minuti  
**Poi:** Usa tool come strumento educativo con supervisore

### 💻 Sviluppatore / Data Scientist
**Leggi:** README.md + FINALE_v3.6.2.md + codice sorgente  
**Tempo:** 45 minuti  
**Poi:** Fork su GitHub e contribuisci!

### 🎓 Docente / Formatore
**Leggi:** README.md + prepara slides da tabella DD  
**Tempo:** 1 ora  
**Poi:** Workshop pratico con casi reali

---

## 🔄 Storia Evolutiva (Timeline)

```
v3.0-3.2  → Core features (morfologia, scoring, UI)
    ↓
v3.3      → Bibliografia + genetica Bastian
    ↓
v3.4      → Fix matematico (105→100 normalizzato)
    ↓
v3.5      → Malignancy score invertito (0=bene, 100=male)
    ↓
v3.6      → Dropdown invertiti (coerenza totale)
    ↓
v3.6.1    → Prerequisito morfologico esplicito
    ↓
v3.6.2    → DD nevi comuni ← VERSIONE ATTUALE ✅
```

---

## ✅ Checklist Prima dell'Uso Clinico

- [ ] Letto README.md sezione Prerequisiti
- [ ] Letto README.md sezione Disclaimer
- [ ] Compreso quando usare/non usare tool (DD section)
- [ ] Testato su almeno 3 casi noti (benigno, AST, maligno)
- [ ] Verificato concordanza diagnosi tool vs diagnosi nota
- [ ] Discusso con colleghi/supervisore
- [ ] Deciso workflow integrazione nel referto
- [ ] Pianificato validazione su casistica locale

**Solo dopo questa checklist** → Uso in pratica clinica! ✅

---

## 🆘 Supporto & Contatti

### 📧 Email
filippo.bianchi@asst-fbf-sacco.it

### 💻 GitHub
- **Issues:** Bug reports, feature requests
- **Discussions:** Domande, suggerimenti
- **Pull Requests:** Contributi benvenuti!

### 🌐 Online
Tool disponibile: https://infingardo.github.io/spitz-melanoma-tool/

---

## 📊 Statistiche Documentazione

- **Totale file:** 15 documenti
- **Totale dimensione:** 155 KB
- **Lingue:** Italiano (documentazione), English (commit messages)
- **Formato:** Markdown + HTML + JavaScript
- **Versione corrente:** 3.6.2 (26 Nov 2024)

---

## 🎉 Ultima Nota

**Questo INDEX è la tua mappa!**

Non sai da dove iniziare? → **QUICK_START.md**  
Vuoi tutto? → **README.md**  
Hai fretta? → **START_HERE.md**

**Buon utilizzo del tool!** 🔬✨

---

**Aggiornato:** 26 Novembre 2024  
**Versione documentazione:** v3.6.2 FINALE  
**Autore:** Dr. Filippo Bianchi
