console.log("Alguma coisa em aspas duplas");
console.log('Alguma coisa em aspas duplas');
let variavel = 20;
let nome = 'Senac';
console.log(nome);
nome = 10;

console.log(nome);
console.log(`Algum coisa em ${variavel}`);

function somaValor(){
    let valor ;
    valor =50 ;
}

//comenterio de linha 
/*

  omentario de bçoco0

*/

//declarando variaveis com let e const

let email, telefone, cpf;

//inicializar as variaveis
email = 'sac@sp.senac.sp';
telefone = 116846468;
cpf = "298.464.469-77";

console.log("Seu e-mail é:" , email);
console.log(`seu telefoe é: ${telefone}`);
console.log(`seu cpf é: ${cpf}`);
//variavel que o seu valor nao
//muda em tempo de excucao
const pi = 1.46468547;
console.log(`valor do ${pi}`);

const meuNome = "senac largo treze";
console.log("Meu nome é:", meuNome);


const primeiroNome = "senac";
const segundoNome = "lago treze";

console.log(`primeiro nome ${primeiroNome} sobrenome é ${segundoNome}`);
console.log("primeiro nome",primeiroNome,"sobrenome é",segundoNome );
let num1, num2, resp=0;
num1 = 10;
num2 = 20;

let nomeNome = "senac", sobrenomeNovo =


resp = num1 + num2;
console.log("A soma: ",resp);
resp = num1 - num2;
console.log("A subtração: ",resp);
resp = num1 * num2;
console.log("A multiplicação: ",resp);
resp = num1 / num2;
console.log("A divisão: ",resp);
console.log("o resto da divisão:",resp);


//Expressões em javascript

let a = 3; 
let x = (100+50) * a;
console.log(`O valor da expressão é ${x}`);


//Operadores de imcremento e descremento
let z = 5;
//incrementando o z++ é igual z=z+1
z++;
let y = z;
console.log("valor de y:" , y);
let w = 5;
//descremento w-- é igual w=w-1
w--;
let n = w;
console.log("valo de n:" , n);
//exponenciação
let exp = 5;
let op = exp ** 2;
let matematica = Math.pow(exp,2);
console.log(`exponenciacao: ${op}`);
console.log(`Exponenciacao com classe matematica: ${matematica}`);
//let mun - isso é uma variavel
//
let r = 10;
let s = 10+r;
console.log(`valor de s: ${r} `);

let m = 10+r;
console.log(`valor de s: ${m} `);

//Operadores relacionais retorna true/false
let p="banana";
let q="queijo";

let v = p && q;
console.log(`valor de v é : ${v}`);
//operador ou vai ser verdadeiro quando um dos lados ou dois forem verdadeiro.
let i = b || q ;
console.log(`valor de i é: ${i}`);
//variaveis do  tipo objeto
const pessoa = {
    name:"Senac",
    lastName: "largo treze"
} ;
console.log(`o nome da pessoa ${pessoa.name} e seu sobrenome é `);
//variaveis do tipo array (vatores)
const car = [
    "WV",
    "Ford",
    "Chevrolet"
];
console.log(`o carro escolhido ${car[1]}`);
