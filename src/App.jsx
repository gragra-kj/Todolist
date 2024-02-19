import { useEffect, useState } from "react"
import "./style.css"
import { NewToDoForm } from "./NewTodoForm"
import { Todolist } from "./Todolist"

export default function App(){
  const [todos, settodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


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
        {id:crypto.randomUUID(),title,completed:false

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
      <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>



    </>
  )
}