
/* tipagem dinâmica */
let a = 10 //int
a = 'nome' //string
a = true //variavel a agora é do tipo Boolean
let a = 3 //vai dar erro, porque uma variável do tipo let não pode ser redeclarada, apenas pode ter o valor mudado

let value 
console.log(value) //undefined

const b = "Constante"
b = "outro valor" //vai dar erro, porque uma constante não pode ter mais atribuição de valor

let x = 10
console.log(`o valor de x é ${x}`); //template string (com `` - crases)

const meuNome =  (nome) => `meu nome é ${nome}` //função anônima

texto = meuNome('Elder')
console.log(texto)


/* OBJETO --------------- */
const obj = {
    name: 'React',
    language: 'JavaScript'
}

console.log(obj)

console.log(obj.name)

/*Array */

let arr = [] //declaração de um array

arr = [ /* o array pode receber qualquer valor de qualquer tipo */
    1,
    'Texto',
    false,
    undefined,
    null,
    [ 1, 2, 3 ],
    { nome: 'Elder', idade: 21 }
  ]

arr.push(20) //adicionando mais um item no array (agora vai ter mais uma posição -> arr[6] = 20)
arr.push('Help')

arr.pop() //retira o elemento na posição n-1 (nesse caso o array vai funcionar como uma pilha, retirando o último elemento)

Math.floor(Math.random() * 10) //retorna um número aleatório (inteiro de 0 a 10)



console.log("\n")
console.log("Hello World! \n")

const soma = (a, b) => a + b

let a = 3
let b = 6

res = soma(a, b)
console.log(`${a} + ${b} = ${res}`)
