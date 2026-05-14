const vendas = [
  { produto: 'Notebook', valor: 2500 },
  { produto: 'Mouse', valor: 100 },
  { produto: 'Teclado', valor: 150 },
  { produto: 'Monitor', valor: 900 }
];

let totalVendido = 0;

vendas.forEach(x => totalVendido += x.valor);

console.log(`Total vendido: R$ ${totalVendido.toFixed(2)}`)