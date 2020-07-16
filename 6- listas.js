console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// Criando uma lista
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro` 
);

listaDeDestinos.push(`Curitiba`); // Adicionando itens na lista

console.log("Destinos possíveis: ")
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // deletando item da lista (posicao-inicial, quantidade-a-deletar)
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1], listaDeDestinos[2]);
