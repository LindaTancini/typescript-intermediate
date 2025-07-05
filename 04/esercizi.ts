// Intersezioni di tipi (&) e Tipi Condizionali

// Esercizio 1
type A = { nome: string };
type B = { eta: number };
type C = A & B;

const biografia: C = {
  nome: "Anna",
  eta: 30,
};

console.log(biografia);

// Esercizio 2 (ricerca) (TipoRisultato = Condizione ? TipoSeVero : TipoSeFalso;)
type TipoCondizionale<T> = T extends string ? boolean : number;

type D = TipoCondizionale<string>;
type E = TipoCondizionale<number>;
type F = TipoCondizionale<"ciao">;
type G = TipoCondizionale<boolean>;

function usaTipo<T>(val: T): TipoCondizionale<T> {
  if (typeof val === "string") {
    return true as TipoCondizionale<T>;
  } else {
    return 42 as TipoCondizionale<T>;
  }
}

console.log(usaTipo("ciao"));
console.log(usaTipo(123));
