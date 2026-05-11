// OPERADOR SPREAD - OPERADOR ESPALHADOR EM JAVASCRIPT

let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [...n1,...n2];
// [...n1] -> copiar um array para outro

//console.log("n1: " + n1);
//console.log("n2: " + n2);
console.log("n3: " + n3);
console.log("tipo do n3: " + typeof(n3))

const jogador1 = {
    nome: "Bruno",
    energia: 100,
    vidas: 3,
    magia: 150
}

const jogador2 = {
    nome: "Bruce",
    energia: 100,
    vidas: 5,
    velocidade: 80
}

const jogador3 = {...jogador1, ...jogador2}; // usa o valor do último utilizado

console.log("jogador 3: " + jogador3);
console.log("tipo do jogador 3: " + typeof(jogador3))

// SOMANDO

const soma = (v1, v2, v3) => v1 + v2 + v3;

let valor = [1, 5, 4];
console.log(soma(...valor));

// pegar grupos de elementos HTML

const obj1 = document.getElementsByTagName("div");
const obj2 = [...document.getElementsByTagName("div")];

// obj2.forEach(e => { console.log(e) })
obj2.forEach(e => { e.innerHTML = "CURSO"});


console.log(obj1);
console.log(obj2);