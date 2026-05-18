export default class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this._velocidade = 0; // usamos sublinhado para indicar comportamenteo 'protected' do UML
    }

    mover() {}
    toString() {
        return `[Veiculo] ${this.marca} ${this.modelo}`;
    }
}