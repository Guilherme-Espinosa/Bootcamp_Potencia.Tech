//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
    cliente: {
      nome: gets(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: gets(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
  };
  
  //TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
  //TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
  
    pedido.cliente.telefone = gets(); // Lê o telefone e cria prop no objeto json.
  
  //TODO: Imprima a saída formatada de acordo com este desafio.
  
  print(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}\n
  ID: ${pedido.id}\n
  Tel: ${pedido.cliente.telefone}
  `);