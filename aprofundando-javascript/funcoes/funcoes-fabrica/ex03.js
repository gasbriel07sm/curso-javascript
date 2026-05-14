/** Crie uma factory function criarContaBancaria.

Ela deve ter uma variável privada saldo.

Retorne métodos:
depositar(valor)
sacar(valor)
verSaldo()

Regras:
Não permitir saque maior que o saldo.
Não permitir depósito negativo.
O saldo não pode ser acessado diretamente.
*/

const criarContaBancaria = saldo => {
    return {
        depositar(valor) {
            if (valor < 0) return `Não foi possível efetuar o depósito`;
            saldo += valor;
        },

        sacar(valor) {
            if (valor > saldo) return `Não foi possível efetuar o saque`;
            saldo -= valor;
        },
        
        verSaldo() { return `Saldo atual: ${saldo.toFixed(2)}` }
    }
}

const conta = criarContaBancaria(100);

conta.depositar(50);
conta.sacar(30);
console.log(conta.verSaldo());