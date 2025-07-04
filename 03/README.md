# 📘 Tipi Generici (Generics)

## 🔍 Introduzione
In JavaScript siamo abituati a scrivere funzioni che accettano qualsiasi tipo di valore, spesso sacrificando la sicurezza e la chiarezza del codice.
TypeScript risolve questo problema grazie ai tipi generici, che ti permettono di scrivere funzioni, classi e interfacce riutilizzabili mantenendo la sicurezza dei tipi.

👉 Un generico è un “contenitore” di tipo che puoi specificare al momento dell’uso, evitando di usare any e mantenendo i controlli di tipo attivi.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```
📌 `T` è un parametro di tipo. Al momento dell’uso, TypeScript capirà quale tipo usare in base all’argomento passato.

## 💡 Quando usare i generici?
- Quando scrivi funzioni che devono funzionare con più tipi, ma mantenere il tipo corretto in input/output.
- Quando vuoi evitare ripetizione di codice per ogni tipo.
- Quando vuoi mantenere i suggerimenti di IntelliSense e i controlli di tipo.

## 🎯 Obiettivi degli esercizi
Questi esercizi ti aiuteranno a:
- Usare generici per funzioni e classi
- Scrivere funzioni che accettano array generici
- Comprendere come i generici migliorano la sicurezza e la flessibilità

## 🚀 Conclusioni
👉 I generici sono essenziali per scrivere codice riutilizzabile, robusto e ben tipizzato.
Evita l’uso di `any`, sfrutta `<T>` per mantenere il tipo corretto anche in funzioni flessibili.
Imparerai che spesso TypeScript riesce a inferire automaticamente il tipo, ma dichiararlo esplicitamente rende il codice più leggibile e più sicuro.

## Esercizi
🔎 Usa `<T>` per rappresentare un tipo generico che verrà inferito automaticamente al momento della chiamata.

**ESERCIZIO 1**
Crea una funzione generica `echo<T>(arg: T): T` che restituisce l’argomento passato.

---
👉  `T[]` rappresenta un array di qualsiasi tipo, ma con controllo sul tipo dei suoi elementi.

**ESERCIZIO 2**
Scrivi una funzione generica `arrayLength<T>(arr: T[]): number` che ritorna la lunghezza dell’array.

---
📌 Usa due parametri di tipo (T e U) per indicare due tipi diversi. Il metodo descrivi() dovrebbe restituire una frase leggibile con entrambi i valori.

**ESERCIZIO 3**
Definisci una classe generica `Coppia<T, U>` con due proprietà, e un metodo che restituisce una stringa che li rappresenta.

---
💡 Una tupla ti permette di tipizzare esattamente la posizione degli elementi. In questo caso, U viene prima di T.

**ESERCIZIO 4**
Crea una funzione `scambia<T, U>(a: T, b: U): [U, T]` che scambia i due valori e restituisce una tupla.

---
🔍 Stai combinando i generici con le funzioni di ordine superiore (callback).
**Ricorda**: la funzione condizione deve restituire true per mantenere l’elemento nell’array.

**ESERCIZIO 5**
Scrivi una funzione generica `filtraArray<T>(arr: T[], condizione: (elem: T) => boolean): T[]` che filtra un array basandosi su una condizione.

---

## 🧩 Extra (facoltativo)
> 👉 È buona pratica prevedere anche il caso di array vuoto. Qui il tipo restituito è T oppure null.

Scrivi una funzione generica che accetta un array di generici e ritorna il primo elemento o `null` se vuoto.