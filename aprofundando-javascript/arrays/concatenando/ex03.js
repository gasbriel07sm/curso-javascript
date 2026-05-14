const vendidosSegunda = [
  { produto: 'Notebook', valor: 2500 },
  { produto: 'Mouse', valor: 100 }
];

const vendidosTerca = [
  { produto: 'Teclado', valor: 150 },
  { produto: 'Monitor', valor: 900 }
];

const vendidosQuarta = [
  { produto: 'Cadeira', valor: 700 },
  { produto: 'Mesa', valor: 400 }
];

const vendasDaSemana = vendidosSegunda.concat(vendidosTerca, vendidosQuarta);
const totalVendas = vendasDaSemana.reduce((acc, v) => acc += v.valor, 0);


/** O array completo.
    A quantidade total de vendas.
    O primeiro produto vendido.
    O último produto vendido. 
*/

console.log(vendasDaSemana);
console.log(`Valor total de vendas: ${totalVendas.toFixed(2)}`);
console.log(`Primeiro produto vendido: ${vendasDaSemana[0].produto}`);
console.log(`último produto vendido: ${vendasDaSemana[vendasDaSemana.length - 1].produto}`)