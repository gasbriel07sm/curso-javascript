// funcao - removerProduto -> remover usando splice
const removerProduto = produto => carrinho.splice(carrinho.findIndex(p => p.produto === produto), 1);

const carrinho = [
  { produto: 'Notebook', preco: 2500 },
  { produto: 'Mouse', preco: 100 },
  { produto: 'Teclado', preco: 150 },
  { produto: 'Monitor', preco: 900 }
];

removerProduto('Teclado');
console.log(carrinho);