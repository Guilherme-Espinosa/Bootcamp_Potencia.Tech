//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).

//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.

//TODO: Imprimir a saída no formato especificado neste desafio.


// Funcão para calcular o valor total do pedido
function valorTotal(valorHamburguer, quantidadeHamburguer, valorBebida, quantidadeBebida){
  
  return (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida)
}

// Função pra calcular o valor do troco
function calcTroco(valorPago, valorTotal){
  
  return valorPago - valorTotal
}

// Salvando o retorno das funções nas variáveis
const valorTotalPedido = valorTotal(valorHamburguer, quantidadeHamburguer, valorBebida, quantidadeBebida);
const trocoPedido = calcTroco(valorPago, valorTotalPedido);

// Mensagem com as informações do valores do pedido
const mensagem = `O preço final do pedido é R$ ${valorTotalPedido.toFixed(2)}. Seu troco é R$ ${trocoPedido.toFixed(2)}.`

// Saída
print (mensagem);

// Desafio 02 ok!