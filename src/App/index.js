import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI';

// this is clean beacuase es pure state an logic withouth UI layout/structure
function App() { 
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let localTodos
  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', '[]')
    localTodos = []
  } else {
    localTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = useState(localTodos)
  const [count, setCount] = useState(0);
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    document.title = `${count} :D`;
  }, [count]);

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const filteredTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchValueText = searchValue.toLowerCase()

    return todoText.includes(searchValueText)
  })

  const saveTodos = (newTodos) => {
    const newTodosString = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', newTodosString)
    setTodos(newTodos)
  }

  const completeTodo = (todo_id) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo._id === todo_id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (todo_id) => {
    const newTodos = todos.filter((todo) => {
      return todo._id !== todo_id
    })
    saveTodos(newTodos)
  }

  const increaseCounter = () => {
    setCount(count + 1)
  }
  
  // All UI is in a different component so we separate business logic from view controller from view
  // visualize when your apps grows this is not mantainable
  // this can be clean up using a provider
  return (  
    < AppUI
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      filteredTodos = {filteredTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
      increaseCounter = {increaseCounter}
    />
  );
}

export {App};
