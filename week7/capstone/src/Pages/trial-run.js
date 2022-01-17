
var redirect_uri = "http://localhost:3000/Search"

var client_id = "839d1b6c94f540b0915d932f8d9567e6"
var client_secret = "99201f9a15d04fa2afeb46775168f09f"

 const AUTH = "https://accounts.spotify.com/authorize"

 

 function requestAuth(){
     client_id = document.getElementById('clientId').value
     client_secret = document.getElementById('clientSecret').value
     localStorage.setItem('client_id',client_id)
     localStorage.setItem('client_secret', client_secret)

     let url = AUTH
     url += "?client_id=" + client_id
     url += "&response_type=code"
     url += "&redirect_uri=" + encodeURI(redirect_uri)
     url += "&show_dialog=true"
     url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback user-library-read"
    window.location.href = url
 }

export default function GetSong(){

    return(
        <div>

            <h1>{client_id}</h1>
            <h1>{client_secret}</h1>
            <form>
                <input type='text' id='clientId'></input>
                <input type='text' id='clientSecret' ></input>
                <button onSubmit={requestAuth}>Sign In</button>
            </form>

        </div>
    )
}