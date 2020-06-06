//cria uma action para uma modificação

export function getTodos() { // o próprio componente vai chamar essa action
    console.log("GET TODO")
    return {
        type: "GET_TODOS"
    };
}

export function setTodo(todo) { 
    console.log("SET TODO")
    return {
        type: "SET_TODO",
        payload: todo
    };
}

export function setTodos() {
    console.log("SET TODO")
    return {
        type: "SET_TODOS",
    };
}

export function deleteTodo(index) {
    console.log("DELETE TODO")
    return {
        type: "DELETE_TODO",
        payload: index
    };
}

export function setEditing(index) {
    console.log("SET EDITING")
    return {
        type: "SET_EDITING",
        payload: index
    };
}

export function setTodosEditing() { ////muda o conteúdo da lista de tarefas
    console.log("SET TODOS EDITING")
    return {
        type: "SET_TODOS_EDITING"
    };
}