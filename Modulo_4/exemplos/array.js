/* Métodos de Array: Map, Filter, Reduce
uma das vantagens de usar esses 3 métodos é porque sempre criam novos array, objetos ou valores, não alterando o array original */

animais = ['dog', 'cat', 'lion', 'bird']

numeros = [12, 13, 45, 46]

/* MAP: um loop que passa por todos os elementos de um array, fazendo a mesma funçaõ para cada um e retornando um resultado */
novosAnimais = animais.map( (animal, index) => {
    return { //retorna um objeto
        name: animal,
        id: numeros[index] //pega valor no mesmo índice, no array de números
    }
})

/*novosAnimais vai retornar: 
{ name: 'dog', id: 12 },
{ name: 'cat', id: 23 },
{ name: 'lion', id: 45 },
{ name: 'bird', id: 46 } */


console.log("array de animais:")
console.log(animais)

console.log("array de números:")
console.log(numeros)

console.log("novos animais:")
console.log(novosAnimais)


/* FILTER: retorna um novo array, com os elementos que atenderem à condição, filtrando o array */

//filtra apenas animais que tem o id par
let pares = novosAnimais.filter((animal) => {
    return animal.id % 2 === 0 //retorna se atender a condição (if), ou seja, se for verdadeiro
});

console.log("novos animais:")
console.log(pares)


/* REDUCE: reduz o array a uma coisa só, um valor ou objeto ----------------- */
animaisPeso = novosAnimais.map((animal) => {
    return {
        name: animal.name,
        peso: animal.id
    }
});

console.log('animaisPeso:')
console.log(animaisPeso)

console.log('REDUCE:')
//usando o REDUCE:

reduce = animaisPeso.reduce((inicialValue, animal) => {
    console.log(`${inicialValue} + ${animal.peso} = ${inicialValue + animal.peso}`)
   
    inicialValue += animal.peso
    return inicialValue

}, 0); //o 0 (zero) é o valor inicial

console.log('resultado do Reduce:')
console.log(reduce)
