    
    console.log(`Calculadora`);
    console.log(`\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão`);
    const calculadora = {
     num1: 20,
     num2: 30,
    
     soma: (num1,num2) => {

     this.num1 = num1;
     this.num2 = num2;

        return(this.num1+this.num2);
    }
};
let opcao, num1,num2,oper,resp;    

    opcao = 1;
    num1 = 10
    num2 = 30
    
    if(opcao === 1){
        oper = "Soma";
        resp = calculadora.soma(num1,num2);
    }else if (opcao == 2){
        oper = "subtração";
        resp = calculadora.soma(num1,num2);
    }else if (opcao == 3){
        oper = "multiplicação";
        resp = calculadora.soma(num1,num2);
    }else if (periodo == 4){
        oper = "divisão";
        resp = calculadora.soma(num1,num2);
    };
   
    
    
    console.log("você digitou",num2,"e",num1,);
    
    console.log(`Você selecionou ${calculadora}`);
    
    
    console.log(`O Resultado é ${resp}`);
