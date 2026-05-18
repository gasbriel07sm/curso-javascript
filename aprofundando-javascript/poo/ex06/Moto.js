import Veiculo from './Veiculo.js'
export default class Moto extends Veiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this._velocidade = 80;
    }

    mover() {
        return `${this.marca} ${this.modelo} arrancou rápido a ${this._velocidade} km/h`
    }

    toString() {
        return `[Moto] ${this.marca} ${this.modelo}`;
    }
}