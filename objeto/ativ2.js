//2. Criar um objeto chamado `carro` com propriedades de **marca**, **modelo**, **ano** e **cor**.
//Exiba o **modelo** e **cor**.Altere a **cor** para “jacinto.
//Adicione uma propriedade **condicao** e defina se é usado ou novo.Delete a propriedade **ano**.
//Exiba no console o objeto.Use **notação de ponto**, **delete**

const carro = {
  marca: "honda",
  modelo: "civic",
  ano: 2017,
  cor: "rosa",
};

console.log(carro.modelo);
console.log(carro.cor);

carro.cor = "jacinto";
carro.condicao = "usado";

delete carro.ano;

console.log(carro);
