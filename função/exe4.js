const prompt = require("prompt-sync")();
const one = Number(prompt("digite um número: "));
const two = Number(prompt("digite outro número: "));

function soma(one) {
  return one + two;
}

console.log(soma(one));
