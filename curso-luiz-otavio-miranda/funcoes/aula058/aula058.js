// FUNÇÕES CONSTRUTORAS
// cria e retorna o objeto
// precisamos mudar a convenção (sempre letra maiúscula no inicio)
// sempre usamos construction functions com new

function Pessoa(nome, sobrenome) {
    // atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = function() {
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log('Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
console.log(p1.nome);
p1.metodo();

