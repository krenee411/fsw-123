// need my api key and search query here

//my client id 839d1b6c94f540b0915d932f8d9567e6
// i need to add DeleteForm and EditForm here

import { useState } from "react";

export default function SongSearch(){
    
    const [getData, setGetData] = useState([])
    
        const getShow= () => {
            const searchTitle = document.querySelector("#input").value;
            console.log(searchTitle)
        fetch(`https://open.spotify.com/search/podcast%20${searchTitle}`)
            .then(res => setGetData(res.data))
            .catch(err => console.log(err))
        }
        //so i need space=%20 how do i do that
        return(
            <>
            
                <div id='inputForm'>
                        <input 
                            type = 'text'
                            id='input'
                        />
                        <button onClick={getShow}>Search</button>
                       {getData.map((show)=>{
                           console.log(show)
                            return(
                                <div>
                                    {show}
                                </div>
                            )
                       })}
                </div>
            </>
        )
    }