import React, { useState } from "react";

import TodoItem from "./todolist";

function App() {
  const[text,setText]=useState("");
  const [items,setItems]=useState([]);

  function handleState(event){
    const newValue=event.target.value;
    setText(newValue);

  }
  function addItem(){
    setItems(prevItems => {
      return [...prevItems,text]
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleState} type="text"  value={text}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map(todoItem => <TodoItem text={todoItem}/> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
