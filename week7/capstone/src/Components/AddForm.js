//add a new podcast to your list
import { useState } from "react"

export default function AddForm({addData, btnTx, podName, id}){

    const ogdata = {podName: podName || ''}
    const [addInput, setaddInput] = useState(ogdata)
    

    const onChangeData = (e) => {
        const {name,value} = e.target
        setaddInput(data => ({...data, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addData(addInput, id)
        setaddInput(ogdata)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1 id='formHeader'>Found a Podcast you like add it here!</h1>
                <input
                    type = 'text'
                    name = 'podName'
                    value = {addInput.podName}
                    placeholder="Podcast Name"
                    onChange = {onChangeData}
                ></input>
                <button>{btnTx}</button>
        </form>

    )
}
