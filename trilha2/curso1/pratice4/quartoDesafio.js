/*
O Índice de Massa Corporal (IMC) é um critério adotado pela Organização Mundial da Saúde (OMS) como uma medida internacional para calcular se uma pessoa está no peso ideal.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado um peso e altura de um indivíduo adulto, seja exibida a sua condição de acordo com a tabela abaixo.

    Abaixo de   18.5        = ABAIXO DO PESO;
    Entre       18.5 e 25   = PESO NORMAL;
    Entre       25 e 30     = ACIMA DO PESO;
    Entre       30 e 40     = OBESIDADE;
    Acima de    40          = OBESIDADE GRAVE.
*/

//Entradas---
const peso = 89;
const altura = 1.81;

//Processamento---
const imc = peso / (altura * altura);


//Saídas---
console.log('De acordo com os dados informados o IMC do paciente está calculado em:')
console.log(imc.toFixed(1));
console.log('A condição constatada do paciente é de:');

if (imc <18.5) {
    console.log('Atenção! Paciente ABAIXO DO PESO!')
} else if (imc >=18.5 && imc <25) {
    console.log('Parabéns! Paciente com PESO NORMAL.')
} else if (imc >=25 && imc <30) {
    console.log('Atenção! Paciente se encontra ACIMA DO PESO!')
} else if (imc >=30 && imc <40) {
    console.log('Alerta! Paciente se encontra em ESTADO DE OBESIDADE!')
} else {
    console.log('Alerta! Paciente em ESTADO DE OBESIDADE GRAVE!')
};