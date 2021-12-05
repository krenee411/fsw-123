

function TodoList(props) {
  return(
    props.propName.map((e) => {
      return (
        <li>
          <input type = 'checkbox'/> 
          <lable>{e.text}</lable>
        </li>
      );
    })
  )
}
  
  export default TodoList;
  