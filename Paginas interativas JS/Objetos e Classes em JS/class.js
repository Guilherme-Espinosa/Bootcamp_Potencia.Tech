// Classe é uma definição do que deve ser um objeto (como uma espécie de formulário em que preencheremos com os objetos).
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
// Instância é uma ocorrência daquele objeto.
const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 34);

compararPessoas(vitor, renan);