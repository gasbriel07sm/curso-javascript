import Veiculo from './Veiculo.js'
export default class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this._velocidade = 60;
    }

    mover() {
        return `${this.marca} ${this.modelo} acelerou suavemente a ${this._velocidade} km/h`
    }

    toString() {
        return `[Carro] ${this.marca} ${this.modelo}`;
    }
}