import axios from "axios"
import Podcast from "../Components/SongSearch"

export default function ThisThing(){
/*
http://localhost:3000/Search?
code=AQBWCWtF2_al_c7b4Qh510Z4DyfWE3jivr0uxtUN1BtMSIoy4SFayjJjqpKQ9v9rLFRoeWVtQyrCawPL1rEpNgfEZ9LwGPcxNa2vuuubPCK7pZSu2cjkfUpIJtwVAY7tG_j08PNQMCPLoXnhAEeyWhg4rfNab75KYF_Q2h9QJQN9Ym8OTxapSRUdpBf3ysk2X3hh
*/


 var redirect_uri = "http://localhost:3000/Search"


 var client_id = "839d1b6c94f540b0915d932f8d9567e6"
 var client_secret = "99201f9a15d04fa2afeb46775168f09f"

  const AUTH = "https://accounts.spotify.com/authorize"
  const TOKEN = "http://accounts.spotify.com/api/token"


  function onPage(){
      client_id = localStorage.setItem('client_id', client_id)
     client_secret = localStorage.setItem('client_secret', client_secret)
      if(window.location.search.length > 0){
          handleRedirect()
      }
  }

  function handleRedirect(){
      let code = getCode()
      fetchAccessToken(code)
      window.history.pushState("","", redirect_uri)
  }

  function fetchAccessToken(code){
      let body = "grant_type=authorization_code"
      body += "&code=" + code
      body += "&redirect_uri=" + encodeURI(redirect_uri)
      body += "&client_id=" + client_id
      body += "&client_secret=" + client_secret
      callAuthorizationApi(body)
  }

  function callAuthorizationApi(body){
      let xhr = new XMLHttpRequest()
      xhr.open("POST", TOKEN, true)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader('Authorization', 'Basic' + btoa(client_id + ":" + client_secret))
      xhr.send(body)
      xhr.onload = handleAuthorizationResponse;
  }

  function handleAuthorizationResponse(){
     if( this.status == 200 ){
          var data = JSON.parse(this.responseText)
          console.log(data)
          var data = JSON.phrse(this.responseText)
        
         if( data.access_token != undefined){
            let access_token = data.access_token
             localStorage.setItem('access_token', access_token)
         }
         if( data.refresh_token != undefined){
            let refresh_token = data.refresh_token
             localStorage.setItem('refresh_token', refresh_token)
         }
      onPage()
     }else{
         console.log(this.responseText)
         alert(this.responseText)
     }

  }

  function getCode(){
      let code = null
      const queryString = window.location.search
      if(queryString.length > 0){
          const urlParams = new URLSearchParams(queryString)
          code = urlParams.get('code')
      }
      return code;
  }

  function requestAuth(e){
      e.preventDefault()
      console.log('test')
      client_id = document.getElementById('clientId').value
      client_secret = document.getElementById('clientSecret').value
      localStorage.setItem('client_id', client_id)
      localStorage.setItem('client_secret', client_secret)

      let url = AUTH
      url += "?client_id=" + client_id
      url += "&response_type=code"
      url += "&redirect_uri=" + encodeURI(redirect_uri)
      url += "&show_dialog=true"
     url += "&scope=user-read-private"
     window.location.href = url
  }


  function callApi(method,url,body, callback){
     let xhr = new XMLHttpRequest()
     let access_token = access_token
     xhr.open(method, url, true)
     xhr.setRequestHeader('Content-Type', 'application/json')
     xhr.setRequestHeader('Authorization', 'Bearer' + access_token)
     xhr.send(body)
     xhr.onload = callback;
  }



         return(
             <div>
    
                 <h1>{client_id}</h1>
                 <h1>{client_secret}</h1>
                 <form>
                     <input type='text' id='clientId'></input>
                     <input type='text' id='clientSecret' ></input>
                     <button onClick={requestAuth}>Sign In</button>
                 </form>
    
             </div>
         )
     }
