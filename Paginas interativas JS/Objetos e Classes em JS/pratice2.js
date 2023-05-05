/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

A condição deve ser exibida de acordo com a tabela abaixo.

    Abaixo de   18.5        = ABAIXO DO PESO;
    Entre       18.5 e 25   = PESO NORMAL;
    Entre       25 e 30     = ACIMA DO PESO;
    Entre       30 e 40     = OBESIDADE;
    Acima de    40          = OBESIDADE GRAVE.
*/
class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const Imc = this.calcularIMC();
        if (Imc < 18.5) {
            return ('ABAIXO DO PESO!');
        } else if (Imc >= 18.5 && Imc < 25) {
            return ('PESO NORMAL.');
        } else if (Imc >= 25 && Imc < 30) {
            return ('ACIMA DO PESO!');
        } else if (Imc >= 30 && Imc < 40) {
            return ('OBESIDADE!');
        } else {
            return ('OBESIDADE GRAVE!');
        };
    }
}
const paciente1 = new Pessoas('José Carlos', 70.0, 1.75);
const paciente2 = new Pessoas('Ricardo Feitosa', 87.1, 1.81);
const paciente3 = new Pessoas('Amanda Rodrigues', 98.0, 1.76);

console.log(paciente1);
console.table(paciente1);
console.log('Olá, meu nome é ' + paciente1.nome + ' e meu IMC, com base no meu peso e altura, é:', paciente1.calcularIMC().toFixed(2), paciente1.classificarImc());
