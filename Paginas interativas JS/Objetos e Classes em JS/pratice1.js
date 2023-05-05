/*Crie uma classe pra representar veículos, que possua marca e cor. Crie também um método que utilize informaçoẽs  de consumo médio de combustível para informar o valor total de uma determinada viagem.*/
class Veiculo {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularViagem(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel
    }
}
const uno = new Veiculo('Fiat', 'Prata', 1 / 14);
const gol = new Veiculo('Gol quadrado', 'preto', 1 / 12);
const honda = new Veiculo ('Honda Start 160cc', 'vermelha', 1/45);
console.log(honda.calcularViagem(73, 5.79));