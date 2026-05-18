import Veiculo from './Veiculo.js'
import Moto from './Moto.js'
import Carro from './Carro.js'

const carro = new Carro("Toyota", "Corolla")
const moto = new Moto("Honda", "CB500")

carro.mover()
moto.mover()
console.log(carro.toString())
console.log(moto.toString())

const frota = [carro, moto]
frota.forEach(v => console.log(v.mover()))