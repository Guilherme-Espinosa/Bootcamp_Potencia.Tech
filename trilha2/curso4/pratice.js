// Crie um programa, que dado um número, imprima a sua respectiva tabuada.
const num = 8;
for (let i = 1; i <= 10; i++) {
    console.log(i * num);
    
}


// Crie um programa capaz de percorrer uma lista e seja capaz de imprimir cada número par da lista.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number %2 === 0) {
        console.log(number, 'é par.');
    }     else {
        console.log(number, 'é impar.');
        }   
}

// Outra opção é:
const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log('Os números pares são: ', numerosPares);