//Exiba no console a multiplicação dos elementos que estão na mesma linha.

const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
let mult = 0;
let result = 0;

for (let linha = 0; linha < numbers.length; linha++) {
  for (let coluna = 0; coluna < numbers[linha].length; coluna++) {
    if (coluna == 0) {
      result = numbers[linha][coluna];
    } else {
      result = result * numbers[linha][coluna];
    }
    console.log(result);
  }
}
