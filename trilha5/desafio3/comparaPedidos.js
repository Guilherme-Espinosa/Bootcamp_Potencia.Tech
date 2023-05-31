//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// JSON do Cliente 1
const cliente1 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets())
  };
  
  // JSON do Cliente 2
  const cliente2 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets()) 
  };
  
  //TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
  
  const saoIguais = compararJSONs(cliente1, cliente2);
    
  function compararJSONs(json1, json2) {
    for (let propriedade in json1) {
      if (json1[propriedade] !== json2[propriedade]) {
        return false;
      }
    }
    
    return true;
  }
    
  //TODO: Imprimir a saída conforme o enunciado deste desafio.
  
  if (saoIguais) {
      print('Os pedidos são iguais');
    } else {
      print('Os pedidos são diferentes');
    }