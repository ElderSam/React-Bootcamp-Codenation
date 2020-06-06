const INITIAL_STATE = {
    todo: "OK Redux",
    todos: []
};

function reducer(state=INITIAL_STATE, action) { //cada vez que o componente for renderizado esse state vai ter o dado da nossa aplicação
    switch (action.tpye) {
        case "GET_USERS":
            return 23;
    
        default:
            return state;
    }
}

export default reducer;

/*[].reduce((obj, item) => {

}, {})*/