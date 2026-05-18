import Forma from './Forma.js';
import Circulo from './Circulo.js';
import Retangulo from './Retangulo.js';

const exibirArea = forma => {
    console.log(forma.toString());
}

const ret = new Retangulo(5, 3, "azul")
const cir = new Circulo(4, "vermelho")

exibirArea(ret)
exibirArea(cir)

console.log()
const formas = [ret, cir, new Retangulo(10, 2, "verde")]
formas.forEach(exibirArea)