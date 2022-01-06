
export default function Todo(props) {
 
  return (
    <div>
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
              onClick={() => props.editItem(props.target)}>
              edit
        </button>
        
        
      </li>
    </div>
    
  );

}
    

    