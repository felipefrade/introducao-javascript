console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro` 
);

const idadeComprador = 19;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
let destinoExiste = false;

console.log("\nDestinos possíveis: ")
console.log(listaDeDestinos,"\n");

//Atribuindo à variável o resultado das operações lógicas:
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//Percorrendo a lista e verificando se o destino existe:
let contador = 0;
while (contador < listaDeDestinos.length){
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

if (destinoExiste == true)
    console.log("Destino existe");
else
    console.log("Destino não existe");

if (podeComprar && destinoExiste)
    console.log("Boa viagem!");
else
    console.log("Desculpe, tivemos um erro!");