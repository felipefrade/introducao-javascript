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

//Percorrendo a lista e verificando se destino existe ou não:
//Laço FOR:    
for (let cont = 0; cont < 3; cont++){
    if (listaDeDestinos[cont] == destino){
        destinoExiste = true;
    }
}

if (destinoExiste == true)
    console.log("Destino existe");
else
    console.log("Destino não existe");

if (podeComprar && destinoExiste)
    console.log("Boa viagem!");
else
    console.log("Desculpe, tivemos um erro!");