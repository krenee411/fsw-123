//add a new podcast to your list
import { useState } from "react"

export default function AddForm({addData, btnTx, podName, id}){

    const ogdata = {podName: podName || ''}
    const [formInput, setFormInput] = useState(ogdata)
    

    const onChangeData = (e) => {
        const {name,value} = e.target
        setFormInput(data => ({...data, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addData(formInput, id)
        setFormInput(ogdata)
    }
    return(
        
        <form onSubmit={handleSubmit}>
                
            <h1 id='formHeader'>Found a Podcast you like add it here!</h1>
                <input
                    type = 'text'
                    name = 'podName'
                    value = {formInput.podName}
                    placeholder="Podcast Name"
                    onChange = {onChangeData}
                ></input>
                <button>{btnTx}</button>
        </form>

    )
}
