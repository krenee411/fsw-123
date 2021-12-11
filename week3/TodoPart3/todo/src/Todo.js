export default function Todo(props) {
  return (
    <li _id = {props.text.key} style={{textDecoration: props.text.isCompleted ? "line-through" : "" }}>
      <input type = 'checkbox' onChange= {() => props.completed(props.text, props.text._id)}></input>
      <lable>hello</lable>
      <button onClick={(props.deleted(props.text._id))}>X</button>
    </li>
  );

}
    

    