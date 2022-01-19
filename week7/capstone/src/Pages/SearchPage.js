import axios from "axios";
import { useState } from "react";
import AddForm from "../Components/AddForm";

export default function SearchForm(){
// do i have to put my input form in a function to make it show up when its clicked?

const [getData, setGetData] = useState([])

    const getShow= () => {
        const searchTitle = document.querySelector("#input").value;
        console.log(searchTitle)
    axios.get(`http://localhost:9000/dataArray/search/query?query=${searchTitle}`)
        .then(res => setGetData(res.data))
        .catch(err => console.log(err))
    
    }
    return(
        <>
        
            <div id='searchForm'>
            <AddForm/>
                <h1>Type in the name of the killer you want to know about!</h1>
                    <input 
                        type = 'text'
                        id='input'
                    />
                    <button onClick={getShow}>Search</button>
                   {getData.map((show)=>{
                    return(
                        <div>
                            <h1>Killer: {show.query}</h1>
                            <h2>Podtcast episode:<a href={show.pod1}>Open Spotify Episode</a><i class="fab fa-spotify"></i></h2>
                            <h2>Podcast episode:<a href={show.pod2}>Open Spotify Episode</a><i class="fab fa-spotify"></i></h2>
                            
                        </div>
                     )
                   })

                    }
               
            </div>
        </>
    )
}