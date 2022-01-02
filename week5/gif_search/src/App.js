import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  const [sourse, Setsourse] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const getGif = () => {
      fetch('https://api.giphy.com/v1/gifs/search?q=dog&api_key=l3h3TjpcCVgDqUK8Pa5MQpHDMfufi0ps')
        .then(res => res.json())
        .then(res => {
          let dataNumber = 0;
          res.data.forEach(() =>dataNumber++)
          const random = Math.floor((Math.random() *dataNumber) + 1);
          Setsourse(res.data[random].images.original.url);
          setAlt(res.data[random].title);
        })
        .catch(err => console.log(err))
    }

    getGif();
  }, []);

  const newSearch = () => {
    let requestedSearch = document.querySelector("#input").value;
    let loading = document.createElement("h3");

    document.querySelector("#foundImage").src = "";
    document.querySelector("#foundImage").alt = "";

    loading.textContent = "Loading your GIF...";
    loading.id = "loading";

    document.querySelector("#imgDiv").appendChild(loading);

    if (document.querySelector("#noImageFound")) {
      document.querySelector("#noImageFound").remove();
    }

    fetch(`https://api.giphy.com/v1/gifs/search?q=${requestedSearch}&api_key=l3h3TjpcCVgDqUK8Pa5MQpHDMfufi0ps`)
        .then(res => res.json())
        .then(res => {
          let dataNumber = 0;
          res.data.forEach(() =>dataNumber++);

          if (dataNumber !== 0) {
            const random = Math.floor((Math.random() *dataNumber) + 1);
            Setsourse(res.data[random].images.original.url);
            setAlt(res.data[random].title);
          }
          else if (dataNumber === 0) {
            let noImageFound = document.createElement("h3");
            noImageFound.textContent = "Sorry, we could not find a GIF that matches your search.";
            noImageFound.id = "noImageFound";
            document.querySelector("#imgDiv").appendChild(noImageFound);
          }
        })
        .then(() => {
          document.querySelector("#loading").remove();
        })
        .catch(err => console.log(err))
  }

  return (
    <>
      <div id="inputForm">
        <label id= "lable">Enter your search here: </label>
        <input type="text" id="input" required></input>
        <button onClick={() => {newSearch()}}>Search</button>
      </div>
      <div id="imgDiv">
        <img src={sourse} alt={alt} id="foundImage"></img>
      </div>
    </>
  );
}

export default App;