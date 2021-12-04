import { Todos } from './STORE';
import './App.css';
import React, { createElement } from 'react';

function App() {
 
  const listItems = Todos.map(function(info){
    return info.text
})

console.log(listItems)


  return (
  <ul id ='list'>
      {listItems}
  </ul>
  );
}


export default App;
