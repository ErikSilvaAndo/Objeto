const pessoa = {
  Nome: "Rapha God",
  Idade: 36,
  Profissao: "Programador",
  Pais: "Brasil",
};
console.log(pessoa["Nome"]);
console.log(pessoa["Idade"]);

pessoa.Profissao = "Vendedor da shoppe";
console.log(pessoa);

pessoa.email = "raphagod@gmail.com";
console.log(pessoa);

delete pessoa.Pais;
console.log(pessoa);
