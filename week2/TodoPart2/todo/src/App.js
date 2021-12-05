import { Todos } from './STORE';
import './App.css';
import React, { createElement } from 'react';

function App() {
 
  //const listItems = Todos.map(function(info){
    //return info.text
  //})

//console.log(listItems)
  return (
    <ul>
      {Todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo.text}
          </li>
        )
        })}
    </ul>
    )
}


export default App;
