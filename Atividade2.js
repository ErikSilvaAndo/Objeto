const carro = {
  Marca: "Toyota",
  Modelo: "Kokimoto Tokukuna Tuavara",
  Ano: 1988,
  Cor: "Azul",
};

console.log(carro["Modelo"]);
console.log(carro["Cor"]);

carro.Cor = "Jacinto";

carro.Condicao = "Novo";

delete carro.Ano;
console.log(carro);
