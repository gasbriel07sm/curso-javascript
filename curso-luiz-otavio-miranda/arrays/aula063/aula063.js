// MÉTODO SPLICE
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice( INDICE PARA COMEÇAR A MEXER, QUANTOS ELEMENTOS QUERO REMOVER, ELEMENTOS PARA ADICIONAR (,))
// splice(indice, delete)

//POP
const removidos = nomes.splice(0, 2); // retorna um array
console.log(removidos)
console.log(nomes);

// PUSH
nomes.splice(nomes.length, 0, 'GALE');
console.log(nomes);

// shift
nomes.splice(0, 1);
console.log(nomes);

// unshift
nomes.splice(0,0,'Luiz');
console.log(nomes);