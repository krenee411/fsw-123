
import {useState} from 'react'
//<button onClick={() => toggleEdit()} disabled={todo.isCompleted}>Edit</button>

export default function EditForm(props){

//const [editToggle, setEditToggle] = useState(false)
const [currentTodo, setCurrentTodo] = useState({text: ''})
console.log(props)

const onChangeData = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);

}
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(currentTodo)
    console.log(props.id)
    props.editItem(props.id, currentTodo)
    props.setEditToggle(false)
}
    return(
        <div>
            
                <form onSubmit={handleSubmit}>
                    <input 
                        name= "edit Todo"
                        type= "text" 
                        value={currentTodo.text.length ? currentTodo.text : props.text}
                        id = "editInfo" 
                        onChange = {(e) =>onChangeData(e)}>
                    </input>
                    <button type='submit'>update</button>
                    <button onClick= {() => props.setEditToggle(false)}>cancel</button>
                </form>
           
        </div>
    )
}