//estrutura de decisao
let a = 10;
let b = 20;

if(a>b){
    console.log("É verdadeiro.");
}

if(a>b){
    console.log("É verdadeiro.");
}


//Utilizando o else para responder a parte false
if(a>b){
    console.log("A é maior que B");
}
else{
    console.log("A não é maior que B");
}



/*if(a<b){
    if(b>a){
        if(a!=b){
            console.log("entrou na estrutura");
        }
    }
}
*/
//Utilizando a estrutura de decisão elseif
let saudacao ;

console.log(`\tDigie \t \n 1- Bom dia \n 2-Boa tarde \n 3-Boa noita`);

periodo = 1;

if(periodo == 1){
    saudacao = "Bom dia";
}else if (periodo == 2){
    saudacao = "Boa tarde";
}else if (periodo == 3){
    saudacao = "Boa noite";
}else{
    saudacao = "Nenhum periodo selecionado";
}
console.log(`Você selecionou ${saudacao}`);

