import EditForm from "./EditForm";
import { useState } from "react";

export default function Todo(props) {
  const [editToggle, setEditToggle] = useState(false)
 
  return (
    <div>
      {!editToggle ?
        <li id = {props.text.key} style={{textDecoration: props.text.isComplete ? "line-through" : "" }}>
          <input 
            type = 'checkbox' 
            onChange= {() => props.completed(props.text, props.text.id)}>
          </input>
          <label>{props.text.text}</label>
          <button 
            onClick={() => props.deleted(props.text.id)}>
            X
          </button>
          <button
              disabled={props.text.isComplete}
               onClick={() => setEditToggle(true)}>
               edit
         </button>
        </li>
         :
         <EditForm
         editItem= {props.editItem}
         setEditToggle = {setEditToggle}
         text ={props.text.text}
         id = {props.text.id}
       />
         
      }
    </div>
    
  );

}
    

    