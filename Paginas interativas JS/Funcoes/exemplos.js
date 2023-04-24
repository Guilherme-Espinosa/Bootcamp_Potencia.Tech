// Obter o quadrado de um número.
function quadrado(valor) {
    return valor * valor
}

const quadradoDeDez = quadrado(10)
console.log('O quadrado de 10 é:', quadradoDeDez);
//---

function quadrado(valor) {
    return valor * valor
}

const quadradoDeDezMaisQuadradoDeDez = quadrado(10);
console.log('O quadrado de 10 + o quadrado de 10 é:', quadrado(10) + quadrado(10));
//---

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log('100 somado de juros de 10% é:', incrementarJuros(100, 10))
//---