function api(email, password){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === 123){
                resolve(`O usuário ${email} está logado`);
            }else{
                reject(`Usuário ou senha inválidos`)
            }
        }, 5000);
    });
}

let response = api('eldersam@gmail.com', 1235).then( (value) => {
    return value;
}).catch((error) => {
    return `Digite novamente, ${error}`
});

//console.log(response) //resposta -> Promise { <pending> }
//espera 5 segundos 
//console.log(response) //resposta -> Promise { 'O usuário eldersam@gmail.com está logado' } ou Promise { 'Digite novamente, Usuário ou senha inválidos' }

