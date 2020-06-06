const INITIAL_STATE = { //quando o componente é montado pela primeira vez
    todo: "OK Redux",
    todos: [],
    isEditing: -1
};

function reducer(state=INITIAL_STATE, action) { //cada vez que o componente for renderizado esse state vai ter o dado da nossa aplicação
    switch (action.type) {
        case "GET_TODOS": //se o componente mudou
            return {
                ...state,
                todos: ['todo 1', 'todo 2']
            };

        case "SET_TODO": //se o componente mudou
            return {
                ...state,
                todo: action.payload
                //todo: 'Alguma coisa'
            };

        case "SET_TODOS":
            return {
                ...state,
                todos: [...state.todos, state.todo]
                //todo: 'Alguma coisa'
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((_, i) => i !== action.payload)             
            };  

        case "SET_EDITING":
            return {
                ...state,
                isEditing: action.payload
            };   

        case "SET_TODOS_EDITING":
            return {
                ...state,
                todos: state.todos.map((t, i) => { //mapeia o array de todos, cria um novo array 
                    if(i === state.isEditing){ //se o item do array for o que está editando
                        return state.todo; //então atualiza na listagem com o item modificado
                    }
                        return t; //senão, então retorna o item original
                })
            };   
                       
        default: //se não mudou
            return state;
    }
}

export default reducer;