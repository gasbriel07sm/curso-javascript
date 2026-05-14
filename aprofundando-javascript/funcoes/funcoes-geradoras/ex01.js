/** Crie uma função geradora gerarNumeros.
Ela deve gerar os números 1, 2 e 3. 
*/

function* gerarNumeros() {
    yield 1;
    yield 2;
    yield 3;
}

const gerador = gerarNumeros();

console.log(gerador.next().value);
console.log(gerador.next().value);
console.log(gerador.next().value);
console.log(gerador.next().value);