// Relembrando algumas coisas
// ---

// Declaração de uma variável (tipo constante) que recebe o nome "João" como valor (no caso é uma declaração de uma "string" através de uma variável do tipo "const").

const aluno1 = 'João';
console.log(aluno1);


// Podemos também criar listas
const series = ['1 Série', '2 Série','3 Série','4 Série','5 Série' ];
console.log(series);
console.log(series[2]);
console.table(series);
// Adicionar itens a nossa lista
series.push('6 Série', '7 Série')
console.log(series);
// Podemos adicionar ou substituir itens em uma posição específica
series[7] = '8 Série';
console.log(series);

// Também é possível a criação de um "objeto literal", o que dispensa a criação anterior de uma classe.
const aluno2 = {nome: 'Maria', idade: '12 anos', serie: 'quinta série'};
console.log(aluno2);
console.log(aluno2.idade);
console.table(aluno2);
/*
É necessário ter em mente que:
    Os parênteses "()" servem para:
        - Chamada de função: functionName().
        - Passagem de argumentos para uma função: functionName(argumento1, argumento2).
        - Agrupamento de expressões matemáticas: (5 + 3) * 2.
        - Definição de precedência de operações: (a + b) * c.
        - Declaração de parâmetros em uma função: function myFunction(param1, param2).

    Os colchetes "[]" são utilizados para:
        - Acesso a elementos de um array: array[indice].
        - Definição de arrays literais: const array = [elemento1, elemento2].
        - Utilização em expressões regulares: /[a-z]/.
        - Definição de propriedades dinâmicas em objetos: obj[dinamica] = valor.
        - Utilização em algumas funções, como map, filter e reduce.

    As chaves "{}" são utilizados para "objetos literais" ou "blocos de códigos";
        - Declaração de objetos literais: const obj = { chave: valor }.
        - Definição de escopo em blocos de código, como em loops e condicionais.
        - Definição de classes: class MinhaClasse {}.
        - Acesso a propriedades de um objeto: obj.propriedade.
        - Definição de métodos em objetos: obj.metodo().

        Obs. As anotações da aula foi interrompida em 9:02
*/
