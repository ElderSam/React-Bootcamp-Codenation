import React from "react";
import "./styles.css";

import Item from "./components/Item";

import {useSelector, useDispatch } from 'react-redux';

import {
  getTodos,
  setTodo,
  setTodos,
  deleteTodo,
  setEditing,
  setTodosEditing
} from './actions';

export default function App(){

  const dispatch = useDispatch(); //esse dispatch vai permitir com que a minha action chegue na store

  const { todo, todos, isEditing } = useSelector(state => state) //conecta seu componente a store com o useSelector
  //console.log(store);

  React.useEffect(() => {
    dispatch(getTodos())
  }, [dispatch]) //usando o didMount (quando é mountado o componente, renderizado)

  const handleSubmit = event => { //função para atualizar a tarefa
    event.preventDefault(); //impede atualizar a página

    if(isEditing > 0){ //se está editando uma tarefa
      dispatch(setTodosEditing())
      dispatch(setEditing(-1));

    }else{
      dispatch(setTodos()); 
    }

    dispatch(setTodo("")); //limpa o campo do input
  };

  const handleChange = event => dispatch(setTodo(event.target.value)); //o nome da tarefa recebe o novo valor digitado. O dispatch muda o valor na store
  const handleEdit = index => {
    dispatch(setTodo(todos[index]));
    dispatch(setEditing(index));
  };
  const handleDelete = index => dispatch(deleteTodo(index));

  return (
    <div className="App">
      <h1>ToDo</h1>

      <div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="todo" />
            <input type="text" value={todo} onChange={handleChange} />
          </div>
          <button type="submit">Add</button>
        </form> 
      </div>

      <ul className="todos">
        {todos.map((todo, index) => (
          <Item
            key={`${todo}-${index}`}
            todo={todo}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  )
}