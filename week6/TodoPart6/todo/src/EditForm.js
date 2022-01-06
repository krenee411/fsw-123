
import {useState} from 'react'
//<button onClick={() => toggleEdit()} disabled={todo.isCompleted}>Edit</button>

export default function EditForm(props,text){

const [editToggle, setEditToggle] = useState(false)
const [currentTodo, setCurrentTodo] = useState({})

const onChangeData = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);

}
const handleSubmit = (e) => {

}
    return(
        <div>
            
                <form onSubmit={handleSubmit}>
                    <input 
                        name= "edit Todo"
                        type= "text" 
                        value={currentTodo.text}
                        id = "editInfo" 
                        onChange = {() =>onChangeData()}>
                    </input>
                    <button type='submit' disabled={props.isCompleted}>update</button>
                    <button onClick= {() => setEditToggle(false)}>cancel</button>
                </form>
           
        </div>
    )
}