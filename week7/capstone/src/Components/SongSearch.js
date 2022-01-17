// need my api key and search query here

// //my client id 839d1b6c94f540b0915d932f8d9567e6
// // i need to add DeleteForm and EditForm here

// //title is what i need to get from the api....somthing like data.title
// //maybe the href: so it will link to the page?

// import axios from "axios";
// import { useState, useEffect } from "react";


// export default function Podcast() {
//     const [token, setToken] = useState('')

//     useEffect(()=>{

//         axios('https://accounts.spotify.com/api/token', {
//             'method': 'POST',
//             'headers': {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Authorization': 'Basic ' + ('839d1b6c94f540b0915d932f8d9567e6' + ':' + " 99201f9a15d04fa2afeb46775168f09f "),
//             },
//             data: 'grant_type=client_credentials'
//         }).then(tokenResponse =>{
//                 console.log(tokenResponse.data.access_token)
//                 setToken(tokenResponse.data.access_token)
//         }) .catch(err => console.log(err))   
        
//     },[])

//     return(
//         <div>

//         </div>
//     )
// }



// export default function SongSearch({getShow}){

//     var client_id = '839d1b6c94f540b0915d932f8d9567e6'; // Your client id
//     var client_secret = '99201f9a15d04fa2afeb46775168f09f'; // Your secret
//     var redirect_uri = 'http://localhost:3000'; // Your redirect uri
//     //var scope = '\user-read-private user-read-email\'

//     //or does my add function go here??
//     const [getData, setGetData] = useState([])
    
//         // const getShow= () => {
//         //     const searchTitle = document.querySelector("#input").value;
//         //     console.log(searchTitle)
//         // axios.get({
//         //     url:`https://api.spotify.com/search/podcast%20${searchTitle}/podcast`,
//         //     data:{client_id: client_id, client_secret: client_secret }
//         // })
//         //     .then(res => setGetData(res.data))
//         //     .catch(err => console.log(err))
//         // }
//         //so i need space=%20 how do i do that
//         return(
//             <>
            
//                 <div id='inputForm'>
//                         <input 
//                             type = 'text'
//                             id='input'
//                         />
//                         <button onClick={getShow}>Search</button>
//                        {getData.map((show)=>{
//                            console.log(show)
//                             return(
//                                 <div>
//                                     {show}
//                                 </div>
//                             )
//                        })}
//                 </div>
//             </>
//         )
//     }