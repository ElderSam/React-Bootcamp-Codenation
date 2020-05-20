'use strict'

const fibonacci = () => {
    
    let fib = [0]
    //console.log(fib)
    
    fib[1] = fib[0] + 1
    
    let tam = fib.length
    let res 

    while(fib[tam - 1] < 351){
    
        res = fib[tam - 1] + fib[tam - 2]
        fib.push(res)
    
        tam = fib.length
    }

    return fib

    //console.log(fib) //imprime a sequência de Fibonacci

}

const isFibonnaci = (num) => {
    
    let arr = fibonacci()

    let tam = arr.length
    
    for(var i=0; i < tam; i++){
        
        if(num == arr[i]){
            
            return true;
        }

    }

    return false;
}

module.exports = {
    fibonacci,
    isFibonnaci
}

/*
let arr = fibonacci()

console.log(arr)


let res = isFibonnaci(1)
console.log(res)

res = isFibonnaci(4)
console.log(res)*/
