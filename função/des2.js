//Faça uma aplicação que realize as 4 operações básicas de uma calculadora: **adição**, **subtração**, **multiplicação** e **divisão**.
//Cada operação básica deve ser uma função declarada que receba como parâmetro dois números do qual irá realizar a operação e retornar o resultado.
//A aplicação deve:
//1. receber 2 números do usuário através do prompt
//2. perguntar ao usuário qual operação realizar
//3. exibir o resultado
//4. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.

const prompt = require("prompt-sync")();

function add(one, two) {
  return one + two;
}

function sub(one, two) {
  return one - two;
}
function div(one, two) {
  return one / two;
}

function mult(one, two) {
  return one * two;
}

while (true) {
  const one = Number(prompt("digite um número: "));
  const two = Number(prompt("digite um número: "));
  const pgt = prompt("qual opeação quer fazer?");

  let result;
  if (pgt == "adicao") {
    result = add(one, two);
  } else if (pgt == "subtracao") {
    result = sub(one, two);
  } else if (pgt == "divisao") {
    result = div(one, two);
  } else {
    result = mult(one, two);
  }

  console.log(result);

  const dnv = prompt("deseja fazer mais alguma operação?");
  if (dnv == "nao") {
    break;
  }
}
