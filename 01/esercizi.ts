// Type Inference e Narrowing

// Esercizio 1

function logValore(val: string | number): void {
  if (typeof val === "string") {
    console.log("Sono una stringa");
  } else if (typeof val === "number") {
    console.log("Sono un numero");
  }
}

logValore("Ciao");
logValore(123);

// Esercizio 2

function format(val: string | number | boolean): void {
  if (typeof val === "string") {
    console.log("Sono la stringa dell'es 2");
  } else if (typeof val === "number") {
    console.log("Sono il numero dell'es 2");
  } else if (typeof val === "boolean") {
    console.log("Sono un booleano dell'es 2");
  }
}
format("Ciao");
format(1);
format(false);

// Esercizio 3

let a = "Ciao";
// Posso assegnare solo un valore stringa, sennò TS mi da errore

let b: any = "Ciao da any";
// Posso assegnargli qualsiasi tipo di valore e TS non mi darà errore

// Esercizio 4

function analizza(val: unknown): string {
  if (typeof val === "string") return "Sono una stringa dell'es 4";
  if (typeof val === "number") return "Sono un numero dell'es 4";
  if (typeof val === "boolean") return "Sono un booleano dell'es 4";
  return "Non si sa il tipo";
}
console.log(analizza("Eccomi"));
console.log(analizza(3));
console.log(analizza(true));

// Esercizio 5

function stampaMessaggio(msg: string | null | undefined): void {
  if (typeof msg === "string") {
    console.log("Hai ragione, sono una stringa dell'es 5");
  } else {
    console.log("Non sono niente");
  }
}
stampaMessaggio("Ciao");

// Bonus

function bonus(val: string | number | boolean | null | undefined): void {
  if (typeof val === "string") {
    console.log("Sono una stringa del bonus");
  } else if (typeof val === "number") {
    console.log("Sono un numero del bonus!");
  } else if (typeof val === "boolean") {
    console.log("Sono un booleano del bonus");
  } else if (val === null) {
    console.log("Sono null");
  } else if (val === undefined) {
    console.log("Sono undefined");
  } else {
    console.log("Non sono niente di niente ");
  }
}
bonus("Eccoci di nuovo qua");
bonus(5);
bonus(true);
bonus(null);
bonus(undefined);
