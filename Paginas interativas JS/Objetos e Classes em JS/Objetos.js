const vitor = {
    nome: 'Vitor J. Guerra',
    idade: 25,
}

console.log(vitor.nome);
console.log(vitor.idade);
// ou
console.log(vitor);
/* O que vimos aqui foi que a constante em si já é um objeto e que esse objeto agrupa outros dados dentro dele. Possibilitando que esse objeto seja invocado em sua integralidade ou por partes específicas, adicionando um ponto logo após a citação do objeto e inserindo nome da propriedade, já em seguida do ponto, que guarda a informação desejada.
Invocar o objeto de forma geral é apenas utilizar, por exemplo o nome da função ou constante, enquanto que para termos uma especifidade é necessário especificar também a propriedade exata que contém a informação desejada.*/
// ---
vitor.altura = 1.69;

console.log(vitor.altura);
console.log(vitor);

/* Agora, através do exemplo acima, podemos perceber que também é possível adicionarmos novos atributos a um objeto, mesmo que o façamos desde outras partes do código. Aproveite pra executar o arquivo pelo Node ou através do depurador do VS Code para ver as diferenças desses códigos.*/
// ---

delete vitor.nome;
console.log(vitor);
/* A possibilidade de alteração dos dados inseridos nos objetos é tão dinâmica que podemos criar novas propriedades/dados, ler, atualizar e apagar (CRUD = create, read, update and delete).*/

const pessoa = {
    nome: 'Andreza J. Medeiros',
    idade: 23,

    descrever: function () {
        console.log(('Meu nome é ') + this.nome + (' é minha idade é ') + this.idade)
    }
};

pessoa.descrever ();
// Por algum motivo eu não consegui fazer o metodo "this" funcionar da mesma maneira que o orientador. Mas decidi não entregar os pontos até conseguir fazer funcionar, mesmo que alterando a maneira como é escrito no código. Isso gerou uma vontade de entender mais a respeito de desse método, então provavelmente eu adicionarei mais alguns materiais a respeito disso dentro desta pasta.