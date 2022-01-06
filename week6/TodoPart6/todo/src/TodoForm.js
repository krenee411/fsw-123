import {useState} from 'react'


export default function TodoForm(props){

const [formInput, setFormInput] = useState("")

const onChangeData = () => setFormInput(document.querySelector("#inputInfo").value)
    return(
    <div>
        <input 
            type= "text" 
            placeholder = "Please enter Todo here" 
            id = "inputInfo" 
            onChange = {() =>onChangeData()}>
        </input>
        <button
            onClick={() => props.addTodo(formInput)}>
            Submit
        </button> 
        
    </div>
    )
}