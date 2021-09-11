import { useState } from 'react';
import './App.css';

import {Background} from '../Background'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodo} from '../CreateTodo'

function App() {
  const initTodos = [
    {_id: 1, text: 'hacer ejercicio', completed: false},
    {_id: 2, text: 'leer', completed: false},
    {_id: 3, text: 'comer sano', completed: true}
  ]

  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(initTodos)

  const filteredTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchValueText = searchValue.toLowerCase()

    return todoText.includes(searchValueText)
  })

  return (  
    <Background>
      <div className="container">
        <div className="canvas">
          <TodoCounter />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList todos={todos} />
          <CreateTodo />
        </div>
      </div>
    </Background>
  );
}

export default App;
