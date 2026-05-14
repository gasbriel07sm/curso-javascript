/** Crie uma função fábrica chamada criarPessoa.
Ela deve receber:
nome
idade
*/

const criarPessoa = (nome, idade) => {
    return {
        nome, 
        idade,
        apresentar() {
            console.log(`Meu nome é ${nome} e eu tenho ${idade} anos de idade.`)
        }
    }
}

const nome = 'Gabriel';
const idade = 20;

const pessoa1 = criarPessoa(nome, idade);
pessoa1.apresentar();