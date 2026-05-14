const vendas = [
  { vendedor: 'Gabriel', valor: 100 },
  { vendedor: 'Ana', valor: 200 },
  { vendedor: 'Gabriel', valor: 300 },
  { vendedor: 'Carlos', valor: 150 },
  { vendedor: 'Ana', valor: 400 }
];

const totalVendido = vendas.reduce((acc, v) => {
    const nome = v.vendedor;
    const valor = v.valor;
    
    if (acc[nome]) {
        acc[nome] += valor;
    } else {
        acc[nome] = valor;
    }

    return acc;
}, {})

console.log(totalVendido)