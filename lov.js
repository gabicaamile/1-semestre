const prompt = require("prompt-sync")();
const num = Number(prompt("Digite um número de 1 a 6: "));
let frs;

if (num == 1) {
  console.log("você é o amor da minha vida");
} else if (num == 2) {
  console.log("Eu te luo");
} else if (num == 3) {
  console.log("eu te almo");
} else if (num == 4) {
  console.log("eu te amo a distância do número 1 até o número 2");
} else if (num == 5) {
  console.log("você é minha melhor escolha");
} else {
  console.log(
    "Só tenho que agradecer por ter você em minha vida, você é o melhor namorado do mundo, obrigada, anciosa para ser a mãe dos seus filhos"
  );
}
