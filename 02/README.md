# 📘 Type Assertions e Type Guards personalizzati

## 🔍 Introduzione
A volte TypeScript non riesce a dedurre il tipo correttamente e serve aiutarlo con type assertions (as). I type guards sono funzioni che controllano il tipo in modo personalizzato.

```ts
let val: unknown = "ciao";
let str = val as string;

function isString(x: any): x is string {
  return typeof x === "string";
}
```

##🎯 Obiettivi degli esercizi
Usare type assertions
Scrivere type guards personalizzati
Migliorare il controllo dei tipi durante il runtime

## 🚀 Conclusioni
Le type assertions e i type guards ti aiutano a gestire tipi dinamici in modo sicuro e a far capire a TypeScript cosa stai effettivamente trattando.

## Esercizi

**ESERCIZIO 1**
Usa un’asserzione per convertire unknown in string.

---

**ESERCIZIO 2**
Scrivi un type guard isNumber(x: any): x is number.

---

**ESERCIZIO 3**
Usa il type guard per filtrare un array misto e ottenere solo i numeri.

---

**ESERCIZIO 4**
Scrivi un type guard per verificare se un oggetto è di tipo Persona.

---

**ESERCIZIO 5**
Usa il type guard per filtrare un array di oggetti e ottenere solo le istanze di Persona.

---

### 🧩 Extra (facoltativo)
Scrivi un type guard per verificare se un oggetto è di tipo Auto.