let calculadora;
console.log(`Calculadora`)
console.log(`\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão`);

periodo = 4;

if(periodo == 1){
    calculadora = "Soma";
}else if (periodo == 2){
    calculadora = "subtração";
}else if (periodo == 3){
    calculadora = "multiplicação";
}else if (periodo == 4){
    calculadora = "divisão";
}
num1 = 10
num2 = 30


console.log("você digitou",num2,"e",num1,)

console.log(`Você selecionou ${calculadora}`);

if(periodo ==1){
    resp = num1+num2;
}else if (periodo == 2){
    resp = num1-num2;
}else if (periodo == 3){
    resp = num1*num2;
}else if (periodo == 4){
    resp = num1/num2;
}

console.log(`O Resultado é ${resp}`)

