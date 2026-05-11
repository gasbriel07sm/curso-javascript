// FUNÇÕES IMEDIATAS (IIFE) - Immediately invoked function expression
// funções auto invocadas

(function(idade, peso, altura) {
    
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    } 

    function falaNome() {
        console.log(criaNome('Luiz'))
    }

    falaNome();

    console.log(idade, peso, altura);

})(30, 80, 1.80);

(function() {
    console.log("2º IIFE");
})();