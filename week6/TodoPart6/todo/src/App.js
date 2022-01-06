import {useState} from 'react';
import {Todos} from './STORE.js';
import './App.css';
import TodoList from './TodoList'
import TodoForm from './TodoForm.js'
import {v4 as uuidv4} from 'uuid';
import EditForm from './EditForm'



function App() {
  
  const [todos, changeTodo] = useState(Todos)
  const completed = (myText,my_id) => {
    const copiedArray = [...todos]
    const todoItem = copiedArray.findIndex(e => e.id === my_id)

    if(myText.isComplete === false){
      myText.isComplete = true
    }else{
      myText.isComplete = false
    }
    copiedArray.splice(todoItem, 1 , myText)
    changeTodo(copiedArray)
  }

  const addTodo = (text) => {
    const copiedArray = [...todos]
    const newTodo = {text: `${text}`, id: uuidv4(), isComplete: false}
    copiedArray.push(newTodo)
    changeTodo(copiedArray)
  }

  const deleted = (my_id) => {
    const copiedArray = [...todos]
    const todoItem = copiedArray.findIndex(e => e.id === my_id)
    copiedArray.splice(todoItem, 1)
    changeTodo(copiedArray)
  }

  const editItem = (my_id) => {
    const copiedArray = [...todos]
    const todoItem = copiedArray.findIndex(e => e.id === my_id)
  }

  return (
    <div >
      <h1>My ToDo List</h1>
      <TodoForm addTodo = {addTodo}/>
      <ul>
        <TodoList
          todos = {todos}
          completed = {completed}
          deleted = {deleted}
          edit= {editItem}
        />

      </ul>
    </div>
    )
}


export default App;
