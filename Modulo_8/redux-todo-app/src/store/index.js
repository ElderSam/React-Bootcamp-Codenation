import {createStore} from 'redux';

import reducer from '../reducer';

/*const state = {
    todo: "", 
    todos: []
}

const store = createStore(() => state); 
*/

const store = createStore(reducer); //cria uma store que irá retornar o estado da aplicação, através de um reducer

export default store