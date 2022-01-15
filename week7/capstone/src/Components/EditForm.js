
import {useState} from 'react'
//<button onClick={() => toggleEdit()} disabled={todo.isCompleted}>Edit</button>

export default function EditForm(props){

//const [editToggle, setEditToggle] = useState(false)
const [currentShow, setCurrentShow] = useState('')
console.log(props)

const onChangeData = (e) => {
    setCurrentShow({ ...currentShow, text: e.target.value });
    console.log(currentShow);

}
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(currentShow)
    console.log(props.id)
    props.editItem(props.id, currentShow)
    props.setEditToggle(false)
}
    return(
        <div>
            
                <form onSubmit={handleSubmit}>
                    <input 
                        name= "edit Todo"
                        type= "text" 
                        value={currentShow.text.length ? currentShow.text : props.text}
                        id = "editInfo" 
                        onChange = {(e) =>onChangeData(e)}>
                    </input>
                    <button type='submit'>update</button>
                    <button onClick= {() => props.setEditToggle(false)}>cancel</button>
                </form>
           
        </div>
    )
}