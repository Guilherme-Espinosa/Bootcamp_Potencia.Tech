function calcularJuros(params) {
    
}
// As funções auxiliares podem ser escritas antes, mas a função principal deve acontecer dentro da "function main".
//Declaração da função
function main(params) {
    console.log ('A partir dessa aula, o programa principal deve ser ecrito aqui!');
    calcularJuros ();
}
//invocando a função
main ();
//---
//Nova maneira que a função "main" será declarada e executada durante as aulas e exercícios do bootcamp.
(function () {
    console.log ('Esse é o novo tipo de estrutura que será utilizado durante as aulas como sendo a função "main", só que ela não será nomeada e será autoexecutável.')
})();