//Crie uma variável numero que receba através do prompt um
//número digitado pelo usuário. Crie uma estrutura condicional que verifica se numero é maior que 5 e, se for, exiba "O número é maior que 5".

const prompt = require("prompt-sync")();
let num = prompt("digite um número: ");

if (num >= 5) {
  console.log("maior que cinco");
} else console.log("esse número é menor que cinco");
