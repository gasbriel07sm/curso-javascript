import Forma from './Forma.js';
export default class Retangulo extends Forma {
    constructor(largura, altura, cor) {
        super(cor);
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }

    toString() {
        return `Retângulo ${this.cor} -> Área: ${this.calcularArea().toFixed(2)}`
    }
}