# 🚀 DEPLOYMENT INSTRUCTIONS - Spitz Melanoma Tool v3.3

## ✅ FILES PRONTI

Hai 3 file da scaricare:
1. **index.html** (62 KB) - Tool completo HTML/JavaScript
2. **README.md** (13 KB) - Documentazione completa
3. **COMMIT_MESSAGE.txt** - Messaggio commit per Git

---

## 📦 QUICK START

### Opzione A: Test Locale Immediato
```bash
# Scarica i file, poi:
open index.html
# oppure
python3 -m http.server 8000  # http://localhost:8000
```

### Opzione B: Deploy su GitHub Pages
```bash
# Nel tuo repository esistente (o nuovo)
git add index.html README.md
git commit -F COMMIT_MESSAGE.txt
git push origin main

# Attiva GitHub Pages:
# Settings > Pages > Source: main branch > Save
# URL: https://infingardo.github.io/repo-name/
```

---

## 🔍 MODIFICHE PRINCIPALI v3.3

### Correzioni Critiche
✅ **Bastian 2024 → 2014** in tutti i riferimenti  
✅ **"Criterio duro" → "Criterio solido"** in tutto il codice  
✅ **Massi 2016 Ackerman's → 2014 Springer 2nd Ed**  
✅ GitHub: infingardo | Email: filippo.bianchi@asst-fbf-sacco.it  

### Nuove Features
📚 **Bibliografia interattiva** con filtri + search + export BibTeX  
🔗 **Tooltips linked** direttamente alle citazioni  
🧬 **Genomica MAP3K8 completa** (Newman 2019, Houlier 2020)  
⚠️ **Copyright warning** per Bastian 2014 PDF  

---

## 📝 COSA CONTROLLARE

Prima di pubblicare, verifica:

1. **Apri index.html** nel browser
2. **Test workflow completo**:
   - Compila form morfologia
   - Seleziona genetica (es. TERT o MAP3K8)
   - Calcola score
   - Naviga tutti i tab (Morfologia, Genetica, Sommario, Bibliografia)
3. **Test bibliografia**:
   - Click "Bibliografia" tab
   - Espandi card Bastian 2014
   - Verifica link DOI/PubMed funzionanti
   - Test search box: cerca "MAP3K8"
   - Test filtri categoria
   - Test export BibTeX
4. **Test tooltips**:
   - Hover su ⓘ nei campi
   - Click link "📚 Bastian 2014" nel tooltip
   - Verifica scroll to bibliografia

---

## ⚠️ IMPORTANT NOTES

### Copyright Bastian 2014
**NON caricare** il PDF di Bastian 2014 su GitHub pubblico:
- Copyright © 2014 Annual Reviews
- "For personal use only"
- Rischio DMCA takedown

✅ **Link al DOI** nel README (già fatto)  
✅ **Citazioni nel codice** con riferimenti pagina  
❌ **PDF completo** → NO su repo pubblico  

### Browser Compatibility
Tool funziona su:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ⚠️ Mobile: funziona ma UX limitata

---

## 🎯 NEXT STEPS (OPZIONALI)

Se vuoi migliorare in futuro:

1. **Validazione Clinica**
   - Testare su casistica retrospettiva
   - Confrontare con diagnosi gold-standard
   - Monitorare agreement inter-observer

2. **Features Avanzate**
   - Image upload per correlazione morfologica
   - Integration con PACS
   - Export structured report (HL7 FHIR?)
   - Database casi per machine learning

3. **Bibliografia Espansa**
   - Aggiungere altri paper recenti
   - Link a full-text dove disponibile open access
   - Integration con PubMed API per updates automatici

---

## 🐛 TROUBLESHOOTING

**PDF export non funziona?**
- Verifica script html2pdf.js caricato da CDN
- Controlla console browser per errori
- Fallback: usa Print to PDF del browser

**Bibliografia non appare?**
- Controlla console JavaScript
- Verifica array `bibliography` popolato
- Test con browser diverso

**Tooltips non si vedono?**
- Verifica z-index CSS (già impostato 100)
- Test con viewport più largo

---

## 📧 SUPPORT

Issues su GitHub: https://github.com/infingardo/spitz-melanoma-tool/issues  
Email: filippo.bianchi@asst-fbf-sacco.it

---

**Versione:** 3.3  
**Data:** 2024-11-25  
**Status:** ✅ Pronto per deployment
