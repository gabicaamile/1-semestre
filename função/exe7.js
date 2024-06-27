function somararr(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma = array[i] + soma;
  }
  return soma;
}
console.log(somararr([5, 5, 5]));
