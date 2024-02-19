import { useState } from "react"
import "./style.css"
import { NewToDoForm } from "./NewTodoForm"
import { Todolist } from "./Todolist"
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
  function addTodo(title){
    settodos(currentTodos =>{
      return [
        ...currentTodos,
        {id:crypto.randomUUID(),title:newItem,completed:false

        },
      ]
    })


  }
  function deleteTodo(id){
    settodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }

  return (
    <>
    <NewToDoForm onSubmit={addTodo}/>

      <h1 className="header">Todo List</h1>
      <Todolist todos={todos}/>



    </>
  )
}