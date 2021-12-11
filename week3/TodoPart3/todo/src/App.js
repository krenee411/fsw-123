import {useState} from 'react';
import {Todos} from './STORE.js';
import './App.css';
import TodoList from './TodoList'
function App() {
  
  const [todos, changeTodo] = useState(Todos)
  const completed = (myText,my_id) => {
    const copiedArray = [...todos]
    const todoItem = copiedArray.findIndex(e => e._id === my_id)

    if(myText.isComplete === false){
      myText.isComplete = true
    }else{
      myText.isComplete = false
    }
    copiedArray.splice(todoItem, 1 , myText)
    changeTodo(copiedArray)
  }

  const deleted = (my_id) => {
    const copiedArray = [...todos]
    const todoItem = copiedArray.findIndex(e => e._id === my_id)
    copiedArray.splice(todoItem, 1)
    changeTodo(copiedArray)
  }
  return (
    <div id = "countList">
      <h1>My ToDo List</h1>
      <ul>
        <TodoList
          text = {todos}
          completed = {completed}
          deleted = {deleted}
        />
      </ul>
    </div>
    )
}


export default App;
