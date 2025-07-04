# 📘 Type Inference E Narrowing

## 🔍 Introduzione
TypeScript è in grado di dedurre automaticamente il tipo di molte variabili e costanti, senza che tu debba specificarlo esplicitamente: questo è chiamato type inference.
Inoltre, quando hai a che fare con variabili che possono assumere tipi diversi (union types), puoi restringere il tipo a uno specifico valore o categoria usando tecniche di type narrowing, come i controlli con typeof, instanceof o discriminanti.

Questi strumenti permettono di scrivere codice più sicuro, evitando errori e rendendo più preciso il controllo del flusso.

## 🧠 Differenze chiave
🔹 *Type Inference*
TypeScript deduce il tipo di una variabile da come viene inizializzata.

```ts
let nome = "Luca"; // TypeScript sa che nome è string
```

🔸 *Type Narrowing*
Con controlli runtime puoi "restringere" il tipo di una variabile che può essere union.

```ts
if (typeof x === "string") {
  // Qui TypeScript sa che x è string
}
```
Queste tecniche migliorano la sicurezza del codice e l’autocompletamento durante la scrittura.

## 🎯 Obiettivi degli esercizi
Con questi esercizi imparerai a:
- Usare la type inference in dichiarazioni di variabili
- Scrivere funzioni che usano union types e restringono i tipi in base a condizioni
- Applicare typeof per discriminare tipi primitivi
- Gestire tipi come unknown, null e undefined in modo sicuro
- Differenziare tra tipi dichiarati esplicitamente e tipi inferiti

## 🚀 Conclusioni
La type inference semplifica il codice evitando ripetizioni inutili
Il type narrowing rende il codice più preciso e previene errori in fase di esecuzione
Imparare a combinare questi concetti ti aiuta a scrivere TypeScript più robusto e leggibile
Gestire valori nulli o incerti con controlli ti evita crash inaspettati

👉 Questi concetti sono fondamentali per lavorare efficacemente con i tipi dinamici e union in TypeScript.

## Esercizi

🔎 Funzione con union types e discriminazione con typeof.

**ESERCIZIO 1**
Crea una funzione `logValore(val: string | number)` che logga diversamente in base al tipo.

---
📌 Gestione di più tipi primitivi con type narrowing.

**ESERCIZIO 2**
Usa `typeof` per creare una funzione `format(val)` che gestisce `boolean`, `number` e `string`.

---
💡 Differenza tra assegnazione con tipo inferito e tipo any.

**ESERCIZIO 3**
Dimostra la differenza tra assegnare `let a = "ciao"` e `let a: any = "ciao"`.

---
🔎 Uso del tipo unknown e discriminazione sicura.

**ESERCIZIO 4**
Crea una funzione `analizza(val: unknown): string` che usa `typeof` e restituisce il tipo rilevato.

---
📌 Controllo di valori opzionali o nulli prima di usarli.

**ESERCIZIO 5**
Crea una funzione `stampaMessaggio(msg: string | null | undefined)` che stampa il messaggio solo se è una stringa valida.

---

### 🧩 Extra (Facoltativo)
> 🔸 Capire come TypeScript inferisce e restringe i tipi è essenziale per evitare errori sottili.

Prova a scrivere una funzione che accetta `val: string | number | boolean | null | undefined` e restituisce un messaggio personalizzato per ogni tipo usando `typeof` e controlli espliciti.