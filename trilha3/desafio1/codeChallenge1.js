// Desafio com JavaScript: Tempo Estimado de Entrega

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//TODO: Imprimir a saída no padrão definido no enunciado deste desafio.
//Dica: Para simplificar a formatação, utilize o conceito de interpolação de strings.

// Desafio ok!

function mensagem() {
  const nomeRestaurante = gets();
  const tempoEstimadoEntrega = parseInt(gets());
  console.log(`O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`);
}

mensagem();