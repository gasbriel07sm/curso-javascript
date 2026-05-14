/** Crie uma função geradora percorrerProdutos.
Ela deve receber um array de produtos e retornar um produto por vez. 
*/

function* percorrerProdutos(array) {
    for (let a of array) {
        yield a.nome;
    }
}
    
const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 150 }
];

const gerador = percorrerProdutos(produtos);

console.log(gerador.next().value); 
console.log(gerador.next().value); 
console.log(gerador.next().value); 