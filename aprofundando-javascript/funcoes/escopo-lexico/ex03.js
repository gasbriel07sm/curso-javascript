/** 
Depois altere o código para testar qual nome será exibido se você remover a variável da função interna.

Objetivo: entender como o JavaScript procura variáveis de dentro para fora. 
*/

const nome = 'Global';

function externa() {
  const nome = 'Externa';

  function interna() {
    const nome = 'Interna';
    console.log(nome);
  }

  interna();
}

externa();