const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 150 }
];

produtos.forEach(x => console.log(`Produto: ${x.nome} | Preço: ${x.preco.toFixed(2)}`));