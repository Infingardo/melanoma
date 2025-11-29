# 📋 Changelog v3.6.4 - Riepilogo Correzioni

## 🐛 Bug Fix Identificati e Corretti

### 1. Wording Red Flag Mitosi
**Problema:** Il messaggio "≥6/mm² o multiple/atipiche" era ambiguo  
**Fix:** Cambiato in "≥6/mm² e/o atipiche" per chiarezza  
**File:** index.html

### 2. Link GitHub nel Footer
**Problema:** Puntava al profilo (`github.com/infingardo`) invece del repo  
**Fix:** Ora punta a `github.com/infingardo/spitz-melanoma-tool`  
**File:** index.html

### 3. Punteggio Giant Cells
**Problema:** Max 10 punti per assenza - troppo penalizzante (assenza non è patognomonica)  
**Fix:** Ridotto a max 8 punti  
**File:** index.html  
**Conseguenza:** Max raw score ora 103 (era 105)

### 4. File READM.md Obsoleto
**Problema:** Duplicato rimasto alla v3.4, confondeva  
**Fix:** Rimosso dalla distribuzione  
**Azione:** NON includere nel repo

### 5. DEPLOYMENT_INSTRUCTIONS.md Obsoleto
**Problema:** Riferiva alla v3.3  
**Fix:** Non incluso - README.md contiene tutto il necessario

### 6. INDEX.md con File Inesistenti
**Problema:** Elencava file che non esistevano  
**Fix:** Semplificato per riflettere solo file reali

### 7. COMMIT_MESSAGE.txt Footer
**Problema:** Versione non aggiornata  
**Fix:** Aggiornato a v3.6.4 con data corretta

---

## 📊 Cambiamento Scoring

```
v3.6.3: Max raw = 105 (giant cells max 10)
v3.6.4: Max raw = 103 (giant cells max 8)

Normalizzazione: score = round((raw / max) × 100)
```

**Impatto clinico:** Minimo. La riduzione del peso delle giant cells riflette meglio la letteratura - l'assenza di giant cells non è patognomonica di malignità nelle lesioni spitzoidi.

---

## ✅ File Distribuiti

| File | Dimensione | Descrizione |
|------|------------|-------------|
| index.html | ~76 KB | Tool principale v3.6.4 |
| README.md | ~12 KB | Documentazione completa |
| QUICK_START.md | ~2 KB | Guida rapida |
| COMMIT_MESSAGE.txt | ~1 KB | Template commit |
| INDEX.md | ~1.5 KB | Navigazione documentazione |

---

## ❌ File da NON Includere

- `READM.md` (obsoleto v3.4)
- `DEPLOYMENT_INSTRUCTIONS.md` (obsoleto v3.3)
- Qualsiasi file `*_v3.X.md` delle versioni precedenti

---

## 🚀 Deployment

```bash
# Nel repository
git add index.html README.md QUICK_START.md COMMIT_MESSAGE.txt INDEX.md
git commit -F COMMIT_MESSAGE.txt
git push origin main
```

---

**Autore:** Dr. Filippo Bianchi  
**Data:** 28 Novembre 2024  
**Versione:** 3.6.4
