//Tipi generici

// Esercizio 1
function echo<T>(arg: T): T {
  return arg;
}
console.log("Tipi generici");

// Esercizio 2
function arrayLength<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrayLength([1, 2, 3, 4, 5]));

// Esercizio 3 (ricerca)
type Coppia<T, U> = {
  primo: T;
  secondo: U;
};

const coppia: Coppia<number, string> = { primo: 10, secondo: "ciao" };
console.log(coppia);

// Esercizio 4 (ricerca)
function scambia<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

const valoriScambiati = scambia("Ciao", 2);
console.log(valoriScambiati);

// Esercizio 5 (ricerca)
function filtraArray<T>(arr: T[], condizione: (elem: T) => boolean): T[] {
  return arr.filter(condizione);
}

const numeri = [2, 3, 6, 1, 8, 67, 76];
const numeriPari = filtraArray(numeri, (n) => n % 2 == 0);
console.log(numeriPari);

// Bonus (ricerca)
function bonus<T>(arr: T[]): T | null {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return null;
  }
}

const parole = ["gatto", "cane"];
console.log(bonus(parole));

const vuoto: number[] = [];
console.log(bonus(vuoto));
