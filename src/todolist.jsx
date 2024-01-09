import React, {  useState } from 'react'

function TodoItem(props) {
    const[isDone,setIsDone]=useState(false);
    function deleteItem(){
        setIsDone((prevValue)=>
        {
            return !prevValue;
        });

    }

  return (
    <li onClick={deleteItem} style={{textDecoration: isDone? "line-through":"none"}}>{props.text}</li>
  )
}

export default TodoItem;
