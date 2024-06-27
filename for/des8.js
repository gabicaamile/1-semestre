//O objetivo do desafio é filtrar números duplicados de uma lista. Por fim, ordenar e exibir a lista.
//Crie um loop `for` que verifique cada elemento da lista. Se um elemento for encontrado novamente, deve ser deletado da lista.
//Após o loop, organize a lista e exiba no **console**.
//Use **length**, **indexOf**, **if**, **splice** e **sort**.

const numbers = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];

for (let i = 0; i < numbers.length; i++) {
  if (i != numbers.indexOf(numbers[i])) {
    numbers.splice(i, 1);
    i--;
  }
}
console.log(numbers.sort());
