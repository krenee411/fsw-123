//add a new podcast to your list
import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
import Podcast from "./SongSearch";

export default function AddForm({podName, genre, id}){
//can i put my add function here?
/*
    const addData=(podName, genre) => {
    const newTodo = {podName: `${podName}`, genre:`${genre}`, id: uuidv4()}
    copiedArray.push(newTodo)
    setGetData(copiedArray)
    }*/

    const ogdata = {podName: podName || '', genre: genre || '', id: uuidv4()}
    const [formInput, setFormInput] = useState(ogdata)
    const [array, setArray] = useState([])

    const onChangeData = (e) => {
        const {name,value} = e.target
        setFormInput(data => ({...data, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setArray([...array, formInput])
        setFormInput(ogdata)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Favorite Podcast</h1>
                <input
                    type = 'text'
                    name = 'podName'
                    value = {formInput.podName}
                    placeholder="Podcast Name"
                    onChange = {onChangeData}
                ></input>

                <input
                    type = 'text'
                    name = 'genre'
                    value = {formInput.genre}
                    placeholder="Podcast Genre"
                    onChange = {onChangeData}
                ></input>

                <button>Add Podcast</button>
            </form>

            <h2>{array.map(podcast => {
                return(
                    <div>Name: {podcast.podName} Genre: {podcast.genre}</div>
                )
            })}</h2>
        </>
    )
}
