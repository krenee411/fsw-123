import { Todos } from './STORE';
import './App.css';
import TodoList from './Todo'

function App() {
 
  //const listItems = Todos.map(function(info){
    //return info.text
  //})

//console.log(listItems)
  return (
    <ul>
      <TodoList propName = {Todos}/>
    </ul>
    )
}


export default App;
