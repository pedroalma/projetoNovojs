//criar uma função
function somaNumero(){
          let num1, num2, resp=0;
          num1 = 10 
          num2 = 30
          resp = num1 + num2;
          console.log(`O resultado da soma ${resp}`);
}
//executando/utilizando uma função
somaNumero();

function somaValorParametros(num1,num2){
    resp = num1+num2;
    console.log(`O resultado da soma ${resp}`);
}
somaValorParametros(20,30);

//criando função com parâmetros e com return

function somaNum(num5,num6){
    let resp = 0;
    resp = num5+num6;
    return resp;
}
//executando função com parâmetros e com return
let resposta = somaNum(60,20);
console.log(`O resultado da soma é ${resposta}`);
//criando funcao parâmetros e com return
function somaNumeros (num7,num8){
    return (num7*num8);

}
//executando função com paâmetros e com return
console.log(`o resultdo da soma é ${somaNumeros(70,90)}`);




