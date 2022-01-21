import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddForm from '../Components/AddForm'
import DeleteForm from '../Components/DeleteForm'


export default function SearchForm(){
// do i have to put my input form in a function to make it show up when its clicked?

const [getData, setGetData] = useState([])
const [listArray, setListArray] = useState([])

  //get all

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
    
    axios.post('http://localhost:8000/listArray', newItem)
    .then(res =>{ 
      console.log(newItem, res.data)
      setListArray(item => [...item, res.data])
      console.log(listArray)
    }).catch(err => console.log(err))
  }

  //delete
  const deleteData = (ListId) => {
    axios.delete(`http://localhost:8000/listArray/${ListId}`)
    .then(res => {
      setListArray(item => item.filter(item => item.id !== ListId))
    })
  }

  // edit || put
  const editData = (ListId, update) => {
    axios.put(`http://localhost:8000/listArray/${ListId}`, update)
    .then(res => {
      setListArray(item => item.map(item => item.id !== ListId ? item: res.data))
    })
  }

    useEffect(()=> {
        getListArray();
      }, [] );

      const mapList = listArray.map(list =>
        <DeleteForm
        {...list}
        key = {list.id}
        title = {list.podName}
        deleteData={deleteData}
        editData={editData}
    />)
    return(
        <>
            <div id='searchForm'>
            <AddForm
              addData={addData}
              btnTx="Add Podcast"
            />
            {mapList}
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