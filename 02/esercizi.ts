//Type Assertions e Type Guards

// Esercizio 1
let valore: unknown = 2;
let numero = valore as number;

// Esercizio 2
function isNumber(x: any): x is number {
  return typeof x === "number";
}

// Esercizio 3
const valori: any[] = [1, "ciao", true, null, undefined, 6];
const soloNumeri = valori.filter(isNumber);
console.log(soloNumeri);

//Esercizio 4 (fatto ricerca)
interface Persona {
  nome: string;
  eta: number;
  attivo: boolean;
}

function isPersona(obj: any): obj is Persona {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.nome === "string" &&
    typeof obj.eta === "number" &&
    typeof obj.attivo === "boolean"
  );
}

const persona1 = { nome: "Anna", eta: 30, attivo: true };
const gatto = { nome: "Felix", eta: 5, attivo: true, razza: "bianco e nero" };

if (isPersona(persona1)) {
  console.log("E' una Persona:", persona1.nome);
} else {
  console.log("NON è una Persona");
}

if (isPersona(gatto)) {
  console.log("Gatto è un animale e non una persona");
}

// Esercizio 5

const datiMisti = [
  { nome: "Luca", eta: 35, attivo: true },
  { nome: "Marco", eta: 40, attivo: false },
  { nome: "Briciola", eta: 1, razza: "Persiano" },
  { nome: "Fiocco", eta: 3, razza: "Bengala" },
];

const soloPersone = datiMisti.filter(isPersona);
console.log(soloPersone);

// Bonus
interface Auto {
  marca: string;
  colore: string;
  anno: number;
  disponibile: boolean;
}

function isAuto(obj: any): obj is Auto {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.marca === "string" &&
    typeof obj.colore === "string" &&
    typeof obj.anno === "number" &&
    typeof obj.disponibile === "boolean"
  );
}

const dati = [
  { marca: "Fiat", colore: "rosso", anno: 2015, disponibile: true },
  { marca: "Ford", colore: "blu", anno: "2018", disponibile: true },
  { nome: "Civic", colore: "nero", anno: 2020, disponibile: false },
  "auto",
  123,
];

const autoValide: Auto[] = dati.filter(isAuto);

console.log("Auto valide:", autoValide);
