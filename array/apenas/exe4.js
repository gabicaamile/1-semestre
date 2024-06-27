//Crie uma lista com os seguintes valores: placa-mãe, cpu, ram, rom, fonte.
//Remova o elemento “cpu” e insira “processador” no lugar. Exiba a lista no **console**.
//Em seguida, inversa a lista e exiba no **console**.
// Use **splice** e **reverse**

const arr = ["placa-mãe", "cpu", "ram", "rom", "fonte"];
console.log(arr);

arr.splice(1, 1, "processador");
console.log(arr);

arr.reverse();
console.log(arr);
