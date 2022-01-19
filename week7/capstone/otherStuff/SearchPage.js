import React, { useState, useEffect } from 'react';
import Dropdown from '../Components/Dropdown'
import Listbox from '../Components/Listbox'
import Detail from '../Components/Detail'
import { Credentials } from '../Components/Credentials'
import axios from 'axios';
import AddForm from '../Components/AddForm'

const App = () => {

  const spotify = Credentials(); 
 
  

  console.log('RENDERING APP.JS');

  const data = [
    {value: 1, name: 'A'},
    {value: 2, name: 'B'},
    {value: 3, name: 'C'},
  ]; 

  const [token, setToken] = useState('');  
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
  const [trackDetail, setTrackDetail] = useState(null);

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);

      axios(`https://api.spotify.com/v1/shows/1cpyLfDHP1cNnyOb478qrt?market=US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {        
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.episodes.items
        })
      });
      
    });

  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 

  const genreChanged = val => {
    setGenres({
      selectedGenre: val, 
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/playlists/${val}`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(playlistResponse => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.episodes.items.external_urls
      })
    });

    console.log(val+ " this is val");
  }

//   const playlistChanged = val => {
//     console.log(val);
//     setPlaylist({
//       selectedPlaylist: val,
//       listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
//     });
//   }




  //external_urls: {spotify: "https://open.spotify.com/episode/6IIqWoyarbf14iJTeukFtD"}
  const buttonClicked = e => {
   e.preventDefault();
       
    // axios(`https://api.spotify.com/v1/playlist$KRkQ62wpFRHbVP51XAa0M`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization' : 'Bearer ' + token
    //   }
    // })
    // .then(tracksResponse => {
    //   setTracks({
    //     selectedTrack: tracks.selectedTrack,
    //     listOfTracksFromAPI: tracksResponse.data.items.external_urls
        
    //   })
      
    // });
    // console.log("here i am!! " + playlist.selectedPlaylist)
  }

  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.track.id === val);

     setTrackDetail(trackInfo[0].track);



   }

  
  

  return (
    <div className="searchForm">
        <AddForm/>
      <form onSubmit={buttonClicked}>        
          <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
          {/* <Dropdown label="Playlist :" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} /> */}
          <div className="col-sm-6 row form-group px-0">
            <button type='submit' className="btn btn-success col-sm-12">
              Search
            </button>
          </div>
          <div className="row">
            {/* <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} /> */}
            {trackDetail && <Detail {...trackDetail} /> }
          </div>        
      </form>
    </div>
    
    
  );
}


export default App;
              
            