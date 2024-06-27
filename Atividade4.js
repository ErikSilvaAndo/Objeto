const dados = [
  {
    id: 1,
    nome: "Carlão Pedregulho",
  },
  {
    id: 2,
    nome: "Zezin Pão de forma",
  },
  {
    id: 3,
    nome: "Taccafaka Nopesh",
  },
];

for (let i = 0; i < dados.length; i++) {
  if (1 == dados[i].id) {
    console.log("Minerador");
  } else if (2 == dados[i].id) {
    console.log("Padeiro");
  } else console.log("Peixeiro");
}
