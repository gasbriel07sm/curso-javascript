/**Crie uma factory function chamada criarProduto.

Ela deve retornar um objeto com:
nome
preco
quantidade
calcularTotal()
*/

const criarProduto = (nome, preco, quantidade) => {
    return { 
        nome, preco, quantidade,
        calcularTotal() { return quantidade * preco }
}}

const produto = criarProduto('Notebook', 2500, 2);
const total = produto.calcularTotal();

console.log(`TOTAL: ${total.toFixed(2)}`)

