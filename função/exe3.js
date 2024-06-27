const prompt = require("prompt-sync")();
const num = prompt("digite um número: ");

function quad(num) {
  return num * num;
}

console.log(quad(num));
