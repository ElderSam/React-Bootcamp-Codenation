function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    if(num2 == 0) return "Erro, não pode dividir por 0";

    return num1 / num2;
}

/*const result = div(20, 0)

console.log(result)*/

module.exports = {
    soma: add,
    subtracao: sub,
    multiplicacao: mult,
    divisao: div
};

