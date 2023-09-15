//métodos e objetos
const pessoa = {
    primeiroNome: "josé",
    sobreNome: "Antunes",
    codigo: 1578,
    fullName: function(){
        return this.primeiroNome + "" + this.sobreNome;
    }
};

let pnome = pessoa.primeiroNome = "senac";
let snome = pessoa.sobreNome = "Largo Treze";

console.log(`O seu nome completo é ${pessoa.fullName(pnome,snome)}`);






const calculadora ={
    num1: 10.50,
    num2: 20.50,
    soma: (num1,num2) =>{

    }

}
const sub = (num1,num2) => {
    return num1+num2;
} 
const vezes = () =>{
    let resp = num1 * num2;
    return resp;

}
