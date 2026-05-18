import Carrinho from "./Carrinho.js";

const carrinho = new Carrinho()

carrinho.adicionarItem("Notebook", 3500)
carrinho.adicionarItem("Mouse", 150)
carrinho.adicionarItem("Teclado", 280)

console.log(carrinho.quantidade)
console.log(carrinho.total)
carrinho.listar()

carrinho.removerItem("Mouse")
console.log(carrinho.quantidade)
console.log(carrinho.total)