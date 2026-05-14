/**Crie uma função dobro que receba um número e retorne o dobro dele.
dobro(5); // 10
Faça uma versão normal e uma versão arrow. 
*/
console.log('\n------------------------------------------------------------')
console.log('FUNCTION DECLARATION\n');

function calculaDobro(n) {
    return n * 2;
}

console.log(calculaDobro(5));

// arrow functions
console.log('\n------------------------------------------------------------')
console.log('ARROW FUNCTION\n');

const dobro = n => n * 2;
console.log(dobro(5));