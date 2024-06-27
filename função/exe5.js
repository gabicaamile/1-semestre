const prompt = require("prompt-sync")();
const one = Number(prompt("digite um número: "));
const two = Number(prompt("digite outro número: "));

function maior(one) {
  if (one >= two) {
    console.log(one);
  } else {
    console.log(two);
  }
}
console.log(maior(one));
