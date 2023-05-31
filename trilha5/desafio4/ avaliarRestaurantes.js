//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const restaurantes = [
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    },
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    }
  ];
  
  //TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  
  const restaurantesMelhorAvaliacao = restaurantes.reduce((prev, current) => (prev.avaliacao > current.avaliacao) ? prev : current)
  
  //TODO: Imprima a saída de acordo com o enunciado deste desafio.
  
  print(`Restaurante: ${restaurantesMelhorAvaliacao.nome}, Avaliação: ${restaurantesMelhorAvaliacao.avaliacao.toFixed(1)}`);
  
  // Saídas esperadas:
  
  // Restaurante: Pizza Boa, Avaliação: 4.2
  // Restaurante: DIO, Avaliação: 5.0
  