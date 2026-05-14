/** Crie uma função geradora gerarId.
Ela deve gerar IDs incrementais.
*/

function* gerarId() {
    const max = 100;
    for (let i = 1; i <= max; i++){
        yield i;
    }
}

const ids = gerarId();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3 