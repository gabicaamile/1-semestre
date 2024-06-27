//1. Crie uma variável soma e realize a soma de cada elemento da matriz.
//Use `for` dentro de `for`.

let arr = [
  [5, 3, 2],
  [45, 2, 7],
];
let soma = 0;

for (let l = 0; l < arr.length; l++) {
  for (let c = 0; c < arr[l].length; c++) {
    soma = soma + arr[l][c];
  }
}
console.log("o resultado da soma é:", soma);
