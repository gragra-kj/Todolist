import { useState } from "react"
import "./style.css"
import { NewToDoForm } from "./NewTodoForm"
export default function App(){
  const [todos,settodos]=useState([])

  function toggleTodo(id,completed){
    settodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo,completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    settodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }

  return (
    <>
    <NewToDoForm/>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length ===0 && "No Todos"}
        {todos.map(todo=>{
          return <li key={todo.id}>
          <label >
            <input type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id,e.target.checked)} />
            {todo.title}
          </label>
          <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </li>
        })}


      </ul>


    </>
  )
}