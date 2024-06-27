const prompt = require("prompt-sync")();
const nome = prompt("digite seu nome: ");

function cumprimento(nome) {
  return "seja bem vindo, " + nome;
}
console.log(cumprimento(nome));
