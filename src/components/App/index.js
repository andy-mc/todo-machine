import { useState } from 'react';
import './App.css';

import {Background} from '../Background'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodo} from '../CreateTodo'

const initTodos = [
  {_id: 1, text: 'hacer ejercicio', completed: false},
  {_id: 2, text: 'leer', completed: false},
  {_id: 3, text: 'comer sano', completed: true}
]

function App() { 
  const [todos, setTodos] = useState(initTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const filteredTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchValueText = searchValue.toLowerCase()

    return todoText.includes(searchValueText)
  })

  const onComplete = (todo_id) => {
    const newTodos = todos.map((todo) => {
      if(todo._id === todo_id){
        console.log('todo:', !!!todo.completed)
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  const onDelete = (todo_id) => {
    const newTodos = todos.filter((todo) => {
      return todo._id !== todo_id
    })     
    setTodos(newTodos)
  }

  return (  
    <Background>
      <div className="container">
        <div className="canvas">
          <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList 
            todos={filteredTodos} 
            onComplete={onComplete} 
            onDelete={onDelete} 
          />
          <CreateTodo />
        </div>
      </div>
    </Background>
  );
}

export default App;
