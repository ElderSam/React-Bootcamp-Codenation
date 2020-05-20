const calculadora = require("./calc") //importa o arquivo calc.js
/*const result = calculadora.soma(50, 50)
console.log(result)*/
const prompt = require('prompt-sync')();

function options(){ //imprime as opções
    console.log(`
    1 - somar
    2 - subtrair
    3 - multiplicar
    4 - dividir
    0 - sair
    `);
}

function optionSelected(opcao){

    num1 = Number(prompt("Digite o número 1: "))
    num2 = Number(prompt("Digite o número 2: "))

    if(opcao == '1'){
        return calculadora.soma(num1, num2);
   
    }else if(opcao == '2'){
        return calculadora.subtracao(num1, num2);
    }
}

let opcao;
while(opcao != "0"){
    options();
    opcao = prompt('Qual a opção? ');
    const resultado = optionSelected(opcao);

    console.log(`O resultado é ${resultado}`)

    
}

