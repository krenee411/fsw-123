import SongSearch from "../Components/SongSearch";
import { useState } from "react";
import axios from 'axios'
import AddForm from "../Components/AddForm";

export default function Search(){
    const [getData, setGetData] = useState([])

    const getShow= () => {
        const searchTitle = document.querySelector("#input").value;
        console.log(searchTitle)
    axios.get(`https://open.spotify.com/search/podcast%20${searchTitle}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

   
    return(
        <body id="searchBody">
            <h1 id='searchHeader'> Dive into some great Podcast!! </h1> 
                <div id='inputForm'>
                    <AddForm/>

                    <h1>Enter what type of podcast you would like to hear</h1>
                        <input 
                            type = 'text'
                            id='input'
                            placeholder="Example: Murder"
                        />
                        <button onClick={getShow}>Search</button>
                        {getData.map((show)=>{
                            return(
                                <div>
                                    <SongSearch
                                    {...show}
                                    />
                                </div>
                            )
                        })}
                </div>
        </body>
    )
}

//spotify search page
