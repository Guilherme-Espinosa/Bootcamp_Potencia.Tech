/*
Faça um algoritmo que calcule e imprima a média e classificação de aprovação de um aluno segundo suas 03 últimas notas.

como deve ser o cálculo das notas:
Média = (nota1 + nota2 + nota3) / 3.

Classificações:
Média menor que 5 = Reprovação;
Média entre 5 e 7 = Recuperação;
Média acima de 7 = Aprovação.
*/

//Entradas---
const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const media = (nota1+nota2+nota3)/3;


//Saídas---
console.log('A MÉDIA DO ALUNO FOI:');
console.log(media.toFixed(2));

if (media < 5) {
    console.log ('ALUNO REPROVADO!')
} else if (media >=5 && media <=7) {
    console.log ('ALUNO EM RECUPERAÇÃO!')
} else {
    console.log('ALUNO APROVADO!')
};





