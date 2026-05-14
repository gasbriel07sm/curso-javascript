const carrinho = [
  { produto: 'Notebook', preco: 2500, quantidade: 1 },
  { produto: 'Mouse', preco: 100, quantidade: 2 },
  { produto: 'Teclado', preco: 150, quantidade: 1 }
];

const total = carrinho.reduce((acc, v) => acc + (v.preco * v.quantidade), 0);
console.log(total);