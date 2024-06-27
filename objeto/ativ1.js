//1. Crie um objeto chamado `pessoa` com as seguintes propriedades: **nome**, **idade**, **profissão**, e **país**. Cada propriedade precisa possui algum valor atribuído, seja criativo.
//Exiba no console o **nome** e a **idade**.Altere a **profissão** para “vendedor da shopee”.
//Adicione uma propriedade **email** e atribua um email.Delete a propriedade **país**.Exiba no console o objeto.
//Use **notação de ponto**, **delete**.

const pessoa = {
  nome: "gabriella",
  idade: 17,
  profissão: "estudante depressiva",
  país: "brasil",
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.profissão = "vendedora da shopee";
pessoa.email = "bibriella.camile@gmail.com";

delete pessoa.país;

console.log(pessoa);
