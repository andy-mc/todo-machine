import { useState, useEffect } from 'react';
import { AppUI } from './AppUI';

const initTodos = [
  {_id: 1, text: 'hacer ejercicio', completed: false},
  {_id: 2, text: 'leer', completed: false},
  {_id: 3, text: 'comer sano', completed: true}
]

function App() { 
  // all logic is in main App dad component
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(initTodos)
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

  const completeTodo = (todo_id) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo._id === todo_id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const deleteTodo = (todo_id) => {
    const newTodos = todos.filter((todo) => {
      return todo._id !== todo_id
    })     
    setTodos(newTodos)
  }

  const increaseCounter = () => {
    setCount(count + 1)
  }
  
  // All UI is in a different component so we separate business logic from view controller from view
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
