export default class Funcionario {
    #salario
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    get salario() {
        return this.#salario;
    }

    set salario(valor) {
        if (typeof valor !== 'number' || valor < 0) throw new Error('O valor deve ser numérico e maior que 0');
        if (valor < 1412) throw new Error('O valor mínimo deve ser R$ 1.412');
        this.#salario = valor;
    }

    calcularSalarioFinal() {
        return this.salario;
    }

    toString() {
        return `Funcionário: ${this.nome} | Salário: R$ ${this.salario.toFixed(2)}`
    }
}