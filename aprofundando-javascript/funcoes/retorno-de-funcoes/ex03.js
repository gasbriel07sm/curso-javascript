/** Crie uma função classificarNota que receba uma nota de 0 a 10 e retorne:
'Reprovado' // menor que 6
'Recuperação' // entre 6 e 7
'Aprovado' // maior ou igual a 7

Depois, use essa função dentro de outra função chamada gerarBoletim.

Exemplo:
gerarBoletim('Gabriel', 8);

Retorno esperado:
Gabriel foi Aprovado com nota 8.
*/
console.log('\n------------------------------------------------------------')
console.log('FUNCTION DECLARATION\n');

function classificarNota(nota) {
    if (nota < 6) return `Reprovado`;
    if (nota >= 6 && nota < 7) return `Recuperação`;
    if (nota >= 7) return `Aprovado`;
    return `Nota não cadastrada ou registrada.`;
}

function gerarBoletim(nome, nota) {
    const status = classificarNota(nota);
    return `${nome} foi ${status} com a nota ${nota.toFixed(2)}`;
}

console.log(gerarBoletim('Gabriel', 8));

// arrow functions
console.log('\n------------------------------------------------------------')
console.log('ARROW FUNCTIONS\n');

const classificaNota = nota => {
    if (nota < 6) return `Reprovado`;
    if (nota >= 6 && nota < 7) return `Recuperação`;
    if (nota >= 7) return `Aprovado`;
    return `Nota não cadastrada ou registrada.`;
}

const geraBoletim = (nome, nota) => {
    const status = classificarNota(nota);
    return `${nome} foi ${status} com a nota ${nota.toFixed(2)}`;
}

console.log(geraBoletim('Gabriel', 8));