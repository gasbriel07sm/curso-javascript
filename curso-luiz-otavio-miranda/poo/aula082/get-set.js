// GETTERS E SETTERS EM CLASSES

const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    } 

    get velocidade() {
        return this[_velocidade];
    }

    //set velocidade(valor) {
    //    this[_velocidade] = valor;
    //}

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}


const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 3000;
console.log(c1);

//

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda Oliveira';
console.log(p1.nomeCompleto);