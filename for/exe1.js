//1. Crie uma lista vazia chamada **par** e outra chamada **impar**. Crie um loop `for` que percorra os números de 1 a 100. Verifique se cada
//número é impar ou par.Se for impar ⇒ adicione na lista **impar**.
//Se for par ⇒ adicione na lista **par.**
//Exiba a lista **impar** e a lista **par** no **console**.
// 💡 Use **length** e **push**. Use **módulo** e **if**.

const par = [];
const impar = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    par.push(i);
  } else {
    impar.push(i);
  }
}
console.log(impar);
console.log(par);
