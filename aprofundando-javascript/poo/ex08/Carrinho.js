export default class Carrinho {
    #itens;
    constructor() {
        this.#itens = [];
    }

    adicionarItem(nome, preco) {
        this.#itens.push({ nome, preco });
    }

    removerItem(nome) {
        this.#itens = this.#itens.filter(item => item.nome !== nome);
    }

    get total() {
        return this.#itens.reduce((acc, valor) => acc += valor.preco, 0)
    }

    get quantidade() {
        return this.#itens.length;
    }

    listar() {
        console.log('\nCarrinho: ')
        this.#itens.forEach(item => {
            console.log(`- ${item.nome}: R$ ${item.preco.toFixed(2)}`)
        })
        console.log(`Total: R$ ${this.total.toFixed(2)}\n`)
    }
}

