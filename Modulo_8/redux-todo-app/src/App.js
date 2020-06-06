import React from "react";
import "./styles.css";

import Item from "./components/Item";

import {useSelector} from 'react-redux';

export default function App(){
  const [todo, setTodo] = React.useState(""); //tarefa
  const [isEditing, setisEditing] = React.useState(-1); //se está editando
  const [todos, setTodos] = React.useState([]); //lista de tarefas

  const store = useSelector(state => state) //conecta seu componente a store com o useSelector
  //console.log(store)
  console.log(store)

  const handleSubmit = event => { //função para atualizar a tarefa
    event.preventDefault(); //impede atualizar a página

    if(isEditing > 0){ //se está editando uma tarefa
      setTodos( //muda o conteúdo da lista de tarefas
        todos.map((t, i) => { //mapeia o array de todos, cria um novo array 
          if(i === isEditing){ //se o item do array for o que está editando
            return todo; //então atualiza na listagem com o item modificado
          }
          return t; //senão, então retorna o item original
        })
      );
      setisEditing(-1);
    }else{
      setTodos([...todos, todo]); 
    }

    setTodo(""); //limpa o campo do input
  };

  const handleChange = event => setTodo(event.target.value); //o nome da tarefa recebe o novo valor digitado
  const handleEdit = index => {
    setTodo(todos[index]);
    setisEditing(index);
  };
  const handleDelete = index => setTodos(todos.filter((_, i) => i !== index));

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