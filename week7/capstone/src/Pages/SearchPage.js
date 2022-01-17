import SongSearch from "../Components/SongSearch";
import { useState } from "react";

import AddForm from "../Components/AddForm";
import GetSong from "./trial-run";

export default function Search(){
    const [getData, setGetData] = useState([])

    // const getShow= () => {
    //     const searchTitle = document.querySelector("#input").value;
    //     console.log(searchTitle)
    // axios.get(`https://api.spotify.com/search/podcast%20${searchTitle}/podcast`)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    // }
        return(
        <div id="searchBody">
            <h1 id='searchHeader'> Dive into some great Podcast!! </h1> 
                    <AddForm/>

                    <h1>Enter what type of podcast you would like to hear</h1>
                < GetSong/>
            </div>   
    )
}

//spotify search page
