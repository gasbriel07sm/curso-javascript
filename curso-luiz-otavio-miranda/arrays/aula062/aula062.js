// REVISÃO DE ARRAYS
// POSSUEM VALORES PASSADOS POR REFERÊNCIA

// Strings, Objetos, Funções, Números
// criar array usando construtor
const nomes2 = new Array('Eduardo', 'Maria', 'Joana'); // outra forma de criar array

// criando arrays
//                 0         1        2                    
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes);

// alterar
nomes[2] = 'João';
console.log(nomes);

// deletar nome sem tirar (alterar) o índice
// delete nomes[2];
// console.log(nomes);

// copiar arrays ao invés de passar por referência
const novo = [...nomes];

console.log('-------')

// remover o último elemento
novo.pop(); // remove o último elemento
// ver o ultimo elemento removido
const removido = nomes.pop();
console.log(nomes, removido);

// remover primeiro elemento
const removido2 = novo.shift();
console.log(novo, removido2);

// tamanho array
console.log(nomes.length)

console.log('-------')
// adicionar elementos no final do array
nomes.push('João');
nomes.push('Wallace');
console.log(nomes);

// adicionar elementos no início - unshift()
novo.unshift('João');
novo.unshift('Wallace');
console.log(novo);

// fatiar o array
console.log('------------');

const novo2 = nomes.slice(0, 3);
console.log(novo2);

console.log('-----')

// string em array
let nome = 'Luiz Otávio Miranda';
const novo3 = nome.split(' ');

console.log(novo3);

// array em string
nome = novo3.join(' ');
console.log(nome);