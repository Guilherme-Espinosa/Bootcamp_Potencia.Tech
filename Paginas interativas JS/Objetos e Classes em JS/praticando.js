class Combustivel{
    tipo;
    precoCombustivel;
}
const gasolina = new Combustivel ('tipoA', 5.79);
const alcool = new Combustivel('tipoB', 5.49);

class Carro {
    marca;
    modelo;
    cor;
    autonomia;
    kmRodado;
    gastoTotal;

    constructor (marca, modelo, cor, autonomia, precoCombustivel){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor
        this.autonomia = autonomia;
    }
}
function calcularGastoTotal(params) {
    return gastoTotal = (this.kmRodado / this.autonomia) * Combustivel.precoCombustivel;
}

function descrever (marca, modelo, cor, autonomia, kmRodado, gastoTotal) {
    console.log(`O ${this.marca} ${this.modelo} de cor ${this.cor} possui uma autonomia de ${this.autonomia} e fez uma viagem de ${this.kmRodado}, gastando assim um total R$ ${this.gastoTotal} nessa viagem.`);
}

const Carro = new Carro (BMW, '135i M 3.0 Turbo', 'vermelho', 8.4, 135.8);

descrever ();