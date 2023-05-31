// Entrada
// A entrada consiste em uma lista com 3 pedidos, os quais terão as seguintes propriedades:

// nome: o nome do cliente, representado por uma string;
// tipo: o tipo de comida do restaurante, representado por uma string.
// distancia: a distância em quilometros do pedido até o restaurante, representado por um valor de 0 a 15.
// Saída
// O programa deve exibir no console um texto contendo o nome do cliente e o tipo do pedido mais próximo encontrado na lista de pedidos. Conforme o exemplo abaixo:

// O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}.

const pedidos = [
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    }
  ];
  
  //TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  
  const pedidoMaisProximo = pedidos.reduce((prev, current) => (prev.distancia < current.distancia) ? prev : current);
  // Como ensinado no StackOverFlow, estou utilizando o metodo reduce por não ser mais tão comum a utilização do IE9.
  
  //TODO: Imprima a saída de acordo com o enunciado deste desafio.
  
  print(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);