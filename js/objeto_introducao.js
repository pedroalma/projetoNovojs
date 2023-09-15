//construindo um objeto
const car = {
    marca: "FIAT",
    cor: "Vermelho",
    ano: "2023",
    modelo :  "fastback",
    km: "0",
    velocidade: "0",
    combustivel: "Gasolina",
    escolheCor: function (cor) {
        return cor;
    },
    acelerar: function (velocidade){
        return velocidade = velocidade + 1;
    },
    
}



//acessando os atributos do objeto



console.log(`Seu carro é um ${car.marca} ${car.modelo} ano ${car.ano} sua quilometragem é ${car.km}km abastecido a ${car.combustivel} `);

let mostraCor = car.escolheCor("Vermelho");

console.log(`A cor escolhida ${mostraCor}`);
console.log(`você acelerol ate ${velocidade}`);