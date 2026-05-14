/** Crie uma função ehMaiorDeIdade que receba uma idade e retorne true se for maior ou igual a 18, ou false caso contrário.

ehMaiorDeIdade(20); // true
ehMaiorDeIdade(15); // false 
*/
console.log('\n------------------------------------------------------------')
console.log('FUNCTION DECLARATION\n');

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

console.log(ehMaiorDeIdade(20));
console.log(ehMaiorDeIdade(15));

console.log('\n------------------------------------------------------------')
console.log('ARROW FUNCTION\n');

const maiorIdade = idade => idade >= 18;
console.log(maiorIdade(20));
console.log(maiorIdade(15));