/*
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
const preco = 115;
const pagamento = 4;

//Processamento---
const desconto1 = preco * 0.10;
const desconto2 = preco * 0.15;
const juros = preco * 0.10;

//Saídas---
console.log('O valor do produto é:');
console.log(preco);
console.log('De acordo com a forma de pagamento escolhida, o valor total a pagar é:');

if (pagamento === 1) {
    console.log(preco - desconto1)
} else if (pagamento === 2) {
    console.log(preco - desconto2)
} else if (pagamento === 3) {
    console.log(preco)
} else if (pagamento === 4) {
    console.log(preco + juros)
} else {
    console.log('Escolha inválida. Por favor escolha a forma de pagamento.')
}





