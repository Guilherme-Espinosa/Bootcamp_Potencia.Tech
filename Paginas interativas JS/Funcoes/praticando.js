// Função 01
function informarNome(nome) {
    console.log('Olá, meu nome é ' + nome);
}

informarNome('Guilherme');
informarNome('Espinosa');

// Função 02 - Essa função eu fiz antes de ver a resolução do orientador. Acabei fazendo um cálculo de verificação e classificação da maioridade, em vez de apenas classificar a idade como eles fizeram.
function verificarIdade(anoNascimento) {
    const anoAtual = 2023;
    const idade = (anoAtual - anoNascimento);

    if (idade >= 18) {
        console.log('Você tem: ' + idade, 'anos.', 'Você atingiu a maioridade.');
    } else {
        console.log('Você tem: ' + idade, 'anos.', 'Você ainda não atingiu a maioridade.');
    }
}
verificarIdade(1994);
verificarIdade(2016);
verificarIdade(1966);

// Função 03 - O objetivo nesse exercício é refazer esses cálculos, mas dessa vez utilizando funções.

/* Enunciado anterior:
Elabore um algoritmo que calcule o valor a ser pago por um produto, considerando o valor original do produto e a incidência de descontos ou juros, de acordo com a forma de pagamento escolhida.

Utilize a tabela a seguir para verificar as formas de pagamento disponíveis e efetuar os cálculos.

    | |FORMA DE PAGAMENTO  |   ALTERAÇÃO DO VALOR | |
    | |--------------------|----------------------| |
    |1|DÉBITO              |   10% DE DESCONTO    |1|
    |2|DINHEIRO/PIX        |   15% DE DESCONTO    |2|
    |3|EM 2X               |   SEM JUROS          |3|
    |4|3X OU MAIS          |   10% DE JUROS       |4|
*/

//Entradas---
// const preco = 115;
// const pagamento = 4;

// //Processamento e saídas---
// console.log('O valor do produto é:');
// console.log(preco);
// console.log('De acordo com a forma de pagamento escolhida, o valor total a pagar é:');

// if (pagamento === 1) {
//     console.log(preco - (preco * 0.10))
// } else if (pagamento === 2) {
//     console.log(preco - (preco * 0.15))
// } else if (pagamento === 3) {
//     console.log(preco)
// } else if (pagamento === 4) {
//     console.log(preco + (preco * 0.10))
// } else {
//     console.log('Escolha inválida. Por favor escolha uma forma válida de pagamento.')
// }

// --- Resposta do exercício acima (obs.: Essa função eu fiz antes de ver a resolução do orientador. Então acabou ficando bem diferente):

/*Utilize a tabela a seguir para verificar as formas de pagamento disponíveis e efetuar os cálculos.

    | |FORMA DE PAGAMENTO  |   ALTERAÇÃO DO VALOR | |
    | |--------------------|----------------------| |
    |1|DÉBITO              |   10% DE DESCONTO    |1|
    |2|DINHEIRO/PIX        |   15% DE DESCONTO    |2|
    |3|EM 2X               |   SEM JUROS          |3|
    |4|3X OU MAIS          |   10% DE JUROS       |4|
*/
//Processamento e saída
function formaDePagamento(opcao) {
    const preco = 15.90;

    if (opcao === 1) {
        console.log('O valor total é: R$', (preco - 0.10).toFixed(2), 'com desconto de 10%.');
    } else if (opcao === 2) {
        console.log('O valor total é: R$', (preco - 0.15).toFixed(2), 'com desconto de 15%.');
    } else if (opcao === 3) {
        console.log('O valor total é: R$', (preco.toFixed(2) + ' parcelado em 2x sem juros.'));
    } else if (opcao === 4) {
        console.log('O valor total é: R$', (preco + 0.10).toFixed(2), 'com acréscimo de juros de 10%.');
    } else {
        console.log('Escolha inválida. Por favor escolha uma forma válida de pagamento.');
    }
}
//Entrada
formaDePagamento(1);
formaDePagamento(2);
formaDePagamento(3);
formaDePagamento(4);
formaDePagamento(7);
//Fim---

