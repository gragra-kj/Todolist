import { useState } from "react"
import "./style.css"
export default function App(){
  const [newItem,setNewItem]=useState("")
  const [todos,settodos]=useState([])
  function handleSubmit(e){
    e.preventDefault()

    settodos(currentTodos =>{
      return [
        ...currentTodos,
        {id:crypto.randomUUID(),title:newItem,completed:false

        },
      ]
    })

    // settodos([...todos,{id:crypto.randomUUID(),title:newItem,completed:false},
    // ])
    setNewItem("")

  }
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
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
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