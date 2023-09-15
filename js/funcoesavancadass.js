//funçoes avançadas
function escreverNomes(nome){
    return nome;
}
//executando a função
let nNome = escreverNomes("Senac");

console.log("Olá", escreverNomes("Senac") );
//função como uma expressão
const area =  function (base,altura){
   return base * altura 
}
let x = area (10,20);
console.log("A área é",x)

const pi = 3.14161828141926;

let result = area (40,50)*pi;
console.log(`O pi vezes a á àrea è ${result}`)

const v = () =>{
    console.log(`ola mundo !!!!!!!!!!!`);
}
v();


const raiz = (q) => {
    return q*q;
}

let r = raiz(4);

raiz(4);
console.log(`Raiz quadrada do número 4 é ${r}`);



let seno = Math.sin(30);
let quad = Math.sqrt(4);
let aleatorio = Math.random() * 10 ;

console.log("o seno de 30 é",seno);
console.log("o quadrado de 4 é ", quad);
console.log("aleatorio",aleatorio)