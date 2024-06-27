//1. Exiba cada elemento da matriz.
//Use `for` dentro de `for`.

const arr = [
  [1, 6, 9, 5],
  [99, 55, 33, 77],
];

for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr.length; coluna++) {
    console.log(arr[linha], [coluna]);
  }
}
