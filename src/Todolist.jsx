import { TodoItem } from "./TodoItem"

export function Todolist({todos,toggleTodo,deleteTodo}){
    return(
        <ul className="list">
        {todos.length ===0 && "No Todos"}
        {todos.map(todo=>{
          return(
            <TodoItem id={todo.id} completed={todo.completed} key={todo.id} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )

        })}


      </ul>


        )
}