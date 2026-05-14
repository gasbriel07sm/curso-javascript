/** Crie uma IIFE que simule um pequeno módulo de carrinho.

Ela deve ter uma variável privada chamada itens.

Dentro da IIFE, retorne um objeto com métodos:

adicionarItem(item)
listarItens()
limparCarrinho() 
*/

const carrinho = (function() {
    let itens = [];
    return {
        adicionarItem(item) {
            itens.push(item);
        },

        listarItens() {
            return itens.forEach(x => console.log(x));
        },

        limparCarrinho() { itens = [] }
   } 
})();

carrinho.adicionarItem('Notebook');
carrinho.adicionarItem('Mouse');
carrinho.listarItens();
carrinho.limparCarrinho();
carrinho.adicionarItem('TESTE1');
carrinho.listarItens();