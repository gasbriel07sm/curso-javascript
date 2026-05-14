/** Crie uma função contadorDeExecucoes.
Dentro dela, declare uma variável local chamada contador.
Depois tente acessar essa variável fora da função.

Explique com comentário no código por que ela não pode ser acessada fora. 
*/

const contadorDeExecucoes = () => {
    let contador = 0;
}

console.log(contador);

// o contador não pode ser acessado pois a variável está em escopo de função, ou seja, está inacesível dentro do escopo global