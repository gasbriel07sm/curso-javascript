// LOOP FOR - repetir um conjunto de instruções (iteraçõe - cada repetição que o loop executa)
// definidos: quando sabemos a quantidade de vezes que vamos iterar  >> FOR
// indefinidos: quando não sabemos a quantidade de vezes que vamos iterar >> WHILE, DO WHILE

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " é PAR")
    } else {
        console.log(i + " é ÍMPAR")
    }
}