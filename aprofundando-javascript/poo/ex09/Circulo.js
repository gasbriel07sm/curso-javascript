import Forma from './Forma.js';
export default class Circulo extends Forma {
    constructor(raio, cor) {
        super(cor);
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }

    toString() {
        return `Cícrulo ${this.cor} -> Área: ${this.calcularArea().toFixed(2)}`
    }
}