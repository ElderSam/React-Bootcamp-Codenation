
/* JavaScript Orientado a Objetos: classes, objetos, construtor, atributos, métodos, herança e polimorfismo */

class Person {
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    sayHello() {
        console.log(`Ola, meu nome é ${this.name}, 
        tenho ${this.age} anos, e sou ${this.job}`)
    }

    //tudo que tem get ou set na frente funciona como um atributo no JS
    get sayName(){
        console.log(`Meu nome é ${this.name}`)
    }

    get getName(){
        return this.name
    }

    set setName(newName){
        this.name = newName
    }
}
/*
let user = new Person('JS', 21, 'developer');
user.sayName
user.getName

user.setName = 'React'
user.getName*/

class User extends Person { //herança
    
    constructor(name, age, job, email){
        super(name, age, job) //chama o construtor da classe Pai
        this.email = email
    }
    sayUser() { //esse método é apenas da classe filha
        super.sayHello() //chama o método da classe pai (Polimorfismo)
        console.log(`Olá, sou o usuário ${this.name} da aplicação X`)
    }
}

/*
let newUser = new User('Henrique', 3423, 'singer', 'elder@gmail.com');
console.log(newUser);
newUser.sayHello()
newUser.sayUser()*/