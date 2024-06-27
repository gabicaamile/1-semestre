//3. Crie uma lista com os seguintes valores: amora, ameixa, abacate.
//Insira no inicio os seguintes valores: banana, bergamota. Exiba a lista e o tamanho da lista no **console**.
//Em seguida, remova do inicio da lista 3 elementos, mostrando no **console** cada elemento.
//Use **unshift**, **shift** e **length**

const arr = ["amora", "ameixa", "abacate"];

console.log(arr);

arr.unshift("banana", "bergamota");
console.log(arr.length);

console.log(arr.shift(), arr.shift(), arr.shift());
