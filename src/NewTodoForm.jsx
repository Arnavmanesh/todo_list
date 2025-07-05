import { useState } from "react";


export function NewTodoform({onSubmit}){
      const [newItem, setNewItem] = useState("");
    

function handlesubmit(e){
  e.preventDefault()
  if(newItem ==="") return

  onSubmit(newItem)


setNewItem("")

}
    return (
    <form onSubmit={handlesubmit} className="new-item-form">
        <div className="form-row">
          <label id="name"  htmlFor="item">Add a new item:</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button id ="submit" className="btn">Add</button>
      </form>

    )
}