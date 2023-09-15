//criando arrays 
const carros = ["Fusca","Ferrari","audi","Brasilia"];

const valores = [0,true,"Senac",4.50];

console.log(valores[2])
console.log("Seu carro é", carros[3]);


//criar o array e inserir os elementos 
const car = [];

car [0] = `maverick`;
car [1] = `BMW`;
car [2] = `Volvo`;
console.log(`Seu carro ${car[1]}`);


//percorrendo arrayscom estrutura de repeticao
const frutas = [`Banana`,`Maçã`,`Bergamota`,`abacaxi`,`Pera`,`morango`];

for(let i=0; i<frutas.length; i++ ){
    console.log(`Sua fruta ${frutas[i]}`);
};
const numeros = [50,90,60,80,40,70,10,20,30,5,4,3,2,1,0];
let retorno = numeros.toString();
console.log(retorno);