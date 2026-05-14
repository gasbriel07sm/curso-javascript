/** Crie uma variável fora da função:
Depois crie uma função que exibe essa mensagem no console.
Objetivo: entender que a função consegue acessar variáveis externas. 
*/

const mensagem = 'Olá do escopo global';

const exibirMensagem = () => console.log(mensagem);

exibirMensagem();