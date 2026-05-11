// OPERADORES RELACIONAIS >> retorna verdadeiro ou falso
// > maior que
// < menor que
// >= maior ou igual a 
// <= menor ou igual a 
// != diferente de
// !== diferente de (restrito -> verifica o tipo além do valor)
// == igual a
// === igual restrito (verifica o tipo além do valor)

let num1 = 10;
let num2 = 5;
let num3 = 10;

console.log(num1 > num2); // comparação entre os dois números
console.log(num1 < num2);

console.log(num1 >= num3);
console.log(num3 <= num1);

console.log(num1 == num3);
console.log(num1 != num2);

console.log(!(num1 == num3)); // ! realiza a inversão (invertemos o valor da expressão)