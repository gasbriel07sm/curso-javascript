import Funcionario from './Funcionario.js'
export default class Gerente extends Funcionario {
    constructor(nome, salario, bonusPercentual) {
        super(nome, salario);
        this.bonusPercentual = bonusPercentual;
    }

    calcularSalarioFinal() {
        return this.salario * (1 + (this.bonusPercentual / 100));
    }

    toString() {
        return `Gerente: ${this.nome} | Salário: R$ ${this.salario.toFixed(2)} | Bônus: ${this.bonusPercentual}% | Total: R$ ${this.calcularSalarioFinal().toFixed(2)}`
    }
}