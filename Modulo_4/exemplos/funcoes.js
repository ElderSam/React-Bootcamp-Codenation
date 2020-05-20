/* JavaScript Funcional */

/* criando função pura */
function somar(num1, num2){
    return num1 + num2
}

/*
res = somar(2, 2)
console.log(`2 + 2 = ${res}`)*/


/* ---------------------- */
let array = [1, 2, 3, 4, 5]

function mult(numeros){ //OBS: Esse é apenas um exemplo, o array tem um método map() que faz todo esse processo de forma mais simples, é recomendado user map()
    let newNumeros = []

    for(let i=0; i < numeros.length; i++){
        newNumeros[i] = numeros[i] * 2
    }

    return newNumeros
}

/*
console.log('array antigo: ')
console.log(array)

console.log('array novo: ')
let newArray = mult(array)
console.log(newArray)*/


/* --------------- High Order Functions (ajuda no reaproveitamento de código) ----------------- */
//passando função como parâmetro de outra função
function nome(callBack){
    let name = 'React'
    callBack(name)
}

function printName(name){
    console.log(`Meu nome é ${name}`)
}

//nome é uma composição de printName()
nome(printName)
