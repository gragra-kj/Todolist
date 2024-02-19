import { useState } from "react"
export function NewToDoForm(props){
    props.onSubmit
    const [newItem,setNewItem]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(newItem ==="")return


        props.onSubmit(newItem)




        // settodos([...todos,{id:crypto.randomUUID(),title:newItem,completed:false},
        // ])
        setNewItem("")

      }
    return (

        <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
    )
}