//Crie uma lista com pelo menos 10 números aleatórios.Crie uma variável **soma** que inicie em 0.
//Crie um loop `for` que realize a soma de cada elemento da lista.Exiba a soma.
// Use **length**.

const num = [1, 6, 8, 7, 2, 4, 11, 5, 3, 10];
let soma = 0;

for (let i = 0; i < num.length; i++) {
  soma = soma + num[i];
}

console.log(soma);
