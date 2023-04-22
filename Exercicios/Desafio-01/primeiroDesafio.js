/*
Faça um programa para calcular o valor de uma viagem. Você terá três variáveis:

    1. Preço do Combustível;
    2. Autônomia do veículo em KM/L;
    3. Distância percorrida durante a viagem.
*/

// Entradas---
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

// Cálculos---
const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

// Saída---
console.log(valorGasto.toFixed(2));