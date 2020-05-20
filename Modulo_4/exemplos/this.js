import { Agent } from "https"

let User = {
    name: 'Fulano', 
    lastName: 'Ciclano',
    sayName: function (){
        return `Meu nome ${this.name}`
    }
}

let sayEntireName = function(num1, num2){
    return `meu nome é ${this.name}
    ${this.lastName}, com numero ${num1} e ${num2}`
}


sayEntireName.call(User)
sayEntireName.call(User, 12, 34)
sayEntireName.call(User, [12, 34])

let myName = sayEntireName.bind(User, 12, 34);

console.log(myName)

/* ------------ Closure ---------------- */
let showLoggedUser = function(){
    
    let sayName = () => {
        return `Meu nome ${this.name}` 
    }

    return `O usuario logado é: ${sayName()}` //pega o nome do context externo (that) da função externa
}

showLoggedUser()
showLoggedUser.call(User)


/* ------------ Class ---------------- */
class User{

    //construtor da classe
    constructor(name, age){
        this.name = name
        this.age = age
    }

    //métodos
    getName(){
        console.log(this.name)
    }

    getAge(){
        console.log(this.age)
    }
}

let user = new User('React', 7) //criando um objeto

//acessando métodos do objeto
user.getName()
user.getAge()