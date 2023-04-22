/* Faça um programa para calcular o valor de uma viagem.

você terá 05 variáveis:
1. Preço do Etanol;
2. Preço da Gasolina;
3. Tipo de combustível abastecido;
4. Autonomia do véiculo (consumo de combustível por km);
5. Distância da viagem em Km.
*/

//Entradas---
const etanol = 3.79;
const gasolina = 4.63;
const autonomiaKmPorLitro = 10;
const kmPercorridos = 100;
const litrosConsumidos = kmPercorridos / autonomiaKmPorLitro;
const combustivelAbastecido = 'Gasolina';
/*  Acima, na const de combustível abastecido, informe qual o tipo de combustível foi utilizado.
    Os demais dados de kilomentragem percorrida, autonomia do veículo, preços de gasolina e etanol também podem ser alterados de acordo com a sua realidade.
*/

//Saídas---
if (combustivelAbastecido === 'Etanol') {
    const valorGasto = litrosConsumidos * etanol;
    console.log(valorGasto);
}
else {
    const valorGasto = litrosConsumidos * gasolina;
    console.log(valorGasto);
}

/*
    Exercício feito durante o Bootcampo Potência Tech by Ifood, pela plataforma da DIO.
*/