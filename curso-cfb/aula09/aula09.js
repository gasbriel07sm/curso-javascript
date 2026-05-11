// DIFERENCA ENTRE PRE INCREMENTO E POS INCREMENTO
let n = 10;

// PÓS-INCREMENTO (após a variável) -> utiliza o valor e depois incrementa
// Vale tanto para o ++ quanto para o --
console.log(n++);
console.log(n);

// PRÉ-INCREMENTO (antes da variável) -> incrementa primeiro e depois utiliza
console.log(++n);
console.log(n);

n = -10; // atribuindo o valor negativo pelo operador de inversão (-)

// CONCATENAÇÃO
let n1 = 10;
let n2 = 'TEXTO TESTE'

console.log(n1 + " " + n2);