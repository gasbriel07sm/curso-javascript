import Funcionario from './Funcionario.js'
import Gerente from './Gerente.js'

const func = new Funcionario("Ana", 3000)
const gerente = new Gerente("Carlos", 8000, 20) 

console.log(func.calcularSalarioFinal())
console.log(gerente.calcularSalarioFinal())

try {
    func.salario = 800   
}
catch(e) {
    console.error(e.message)
}

func.salario = 3500   
console.log(func.salario)
console.log(func.toString())
console.log(gerente.toString())