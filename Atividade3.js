const prompt = require("prompt-sync")();

const arr = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite um nome: ");
  let obj = { id: i + 1, nome: nome };
  arr.push(obj);
}
console.log(arr);
