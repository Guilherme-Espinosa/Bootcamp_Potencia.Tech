//Refatorando o desafio do Imc utilizando as functions.

/*
O Índice de Massa Corporal (Imc) é um critério adotado pela Organização Mundial da Saúde (OMS) como uma medida internacional para calcular se uma pessoa está no peso ideal.

Fórmula do Imc:
Imc = peso / (altura * altura)

Elabore um algoritmo que dado um peso e altura de um indivíduo adulto, seja exibida a sua condição de acordo com a tabela abaixo.

    Abaixo de   18.5        = ABAIXO DO PESO;
    Entre       18.5 e 25   = PESO NORMAL;
    Entre       25 e 30     = ACIMA DO PESO;
    Entre       30 e 40     = OBESIDADE;
    Acima de    40          = OBESIDADE GRAVE.
*/

//Criando as funções que poderão calcular e classificar o Imc em qualquer parte do código, desde que devidamente invocadas.

//Funções auxiliar
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(Imc) {
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

//Função principal - Uma função "autoexecutável" por não precisar ser invocada pelo próprio nome após o término dela, já que ela se encontra dentro de parênteses e ao final tem também os parênteses e ponto e vírgula de invocação. Obs.: Como ela não precisa ser invocada pelo próprio nome, o nome da função (main) também pode ser apagado, tornando-a uma "função não nomeada".
(function main() {
    //Declarando as entradas necessárias.
    const peso1 = 88;
    const altura1 = 1.81;

    const peso2 = 81;
    const altura2 = 1.79;

    const peso3 = 130;
    const altura3 = 1.76;

    //Chamando a função.
    ImcPaciente1 = calcularImc(peso1, altura1);
    ImcPaciente2 = calcularImc(peso2, altura2);
    ImcPaciente3 = calcularImc(peso3, altura3);

    //Saída.
    console.log
        ('O Imc dos pacientes foi calculado em:',
            ImcPaciente1.toFixed(2), classificarImc(ImcPaciente1),
            ImcPaciente2.toFixed(2), classificarImc(ImcPaciente1),
            ImcPaciente3.toFixed(2), classificarImc(ImcPaciente1)
            );
})();

/*Fiz um pequeno experimento em cima do que foi ensinado na aula, pois eu queria saber como seria se eu quisesse utilizar a mesma function para calcular o Imc de mais de uma pessoa ao mesmo tempo. E pelo o jeito eu consequi compreender bem a utilização da função. Estou bem satisfeito com isso, apesar de que eu ainda tenho em mente que posso melhorar mais esse código, deixando ele mais "enxuto" de alguma maneira que eu ainda não sei. */

//Atenção. De agora em diante, nas aulas e exercícios do bootcamp, as funções principais (main) serão sempre funções não nomeadas e autoexecutáveis.