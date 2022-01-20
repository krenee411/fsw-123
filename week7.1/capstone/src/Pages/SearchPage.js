<<<<<<< HEAD
import axios from "axios";
import { useState, useEffect } from "react";
import AddForm from "../Components/AddForm";
import DeleteForm from "../Components/DeleteForm";
=======
import React, { useState, useEffect } from 'react';
import Dropdown from '../Components/Dropdown'
import Listbox from '../Components/Listbox'
import Detail from '../Components/Detail'
import { Credentials } from '../Components/Credentials'
import axios from 'axios';
import AddForm from '../Components/AddForm'
>>>>>>> 632f0292b0a4d1f94cf7da9d10d391299aa661c7


export default function SearchForm(){
// do i have to put my input form in a function to make it show up when its clicked?

const [getData, setGetData] = useState([])
const [listArray, setListArray] = useState([])

  //get all
  const getList= () => {
    axios.get('/dataArray')
    .then(res => setGetData(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

  const getListArray = () => {
    axios.get('http://localhost:8000/listArray')
    .then(res => setListArray(res.data))
    .catch(err => console.log(err))
}

const getShow= () => {
    const searchTitle = document.querySelector("#input").value;
    console.log(searchTitle)
axios.get(`http://localhost:9000/dataArray/search/query?query=${searchTitle}`)
    .then(res => setGetData(res.data))
    .catch(err => console.log(err))
}


  //post-add new data
  const addData = (newItem) => {
    axios.post('/listArray', newItem)
    .then(res =>{
      setListArray(item => [...item, res.data])
    })
  }

  //delete
  const deleteData = (ListId) => {
    axios.delete(`/dataArray/${ListId}`)
    .then(res => {
      setListArray(item => item.filter(item => item.id !== ListId))
    })
  }

  // edit || put
  const editData = (update,ListId) => {
    axios.put(`/dataArray/${ListId}`, update)
    .then(res => {
      setListArray(item => item.map(item => item.id !== ListId ? item: res.data))
    })
  }


<<<<<<< HEAD
   
   


    const mapList = listArray.map(list =>
        <DeleteForm
        {...list}
        key = {list.id}
        title = {list.podName}
        deleteData={deleteData}
        editData={editData}
    />)
    useEffect(()=> {
        getList(); getListArray();
      }, [] );
    return(
        <>
            <div id='searchForm'>
            <AddForm
                addData={addData}
                btnTx="Add Podcast"
            />
                <h1>Type in the name of the killer you want to know about!</h1>
=======
  return (
    <div className="searchForm">
    <AddForm/>
      <form onSubmit={buttonClicked}>        
          <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
          <Dropdown label="Playlist :" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
          <div className="col-sm-6 row form-group px-0">
            <button type='submit' className="btn btn-success col-sm-12">
              Search
            </button>
          </div>
          <div className="row">
            <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
            {trackDetail && <Detail {...trackDetail} /> }
          </div>        
      </form>
    </div>
    
>>>>>>> 632f0292b0a4d1f94cf7da9d10d391299aa661c7
    
                {mapList}
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