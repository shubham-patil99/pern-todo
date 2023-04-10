import React, {useEffect, useState} from "react";

const ListTodos =()=>{

const [todos, setTodos] = useState([])  

const deleteTodo = async (id) => {
  try {
    const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
      method: "DELETE"
    })

    setTodos(todos.filter(todo=>todo.todo_id !==id))
  } catch (err) {
    console.error(err)
  }
}

const getTodos = async () => {
  try{
    const response = await fetch("http://localhost:5000/todos")
    const jsonData = await response.json();

    setTodos(jsonData);
  }catch(err){
    console.error(err.message);
  }
}

useEffect(()=>{
  getTodos();
},[])

 console.log(todos)
return(
<div className="mt-3">
<table className="table">
    <thead>
      <tr>
        <th>Description</th>
        <th >Edit</th>
        <th >Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todos =>(
        <tr key={todos.todo_id}>
        <td>{todos.description}</td>
        <td><button className="btn btn-primary">Edit</button></td>
        <td><button className="btn btn-danger" onClick={()=>deleteTodo(todos.todo_id)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
        </div>
    )
}

export default ListTodos;