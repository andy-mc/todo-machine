import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI';


function useLocalStorage(itemKey, initValue) {
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)
  const [storageState, setStorageState] = useState(initValue)

  React.useEffect(() => {
    setTimeout(()=>{
      try {
        const localStorageValue = localStorage.getItem(itemKey)
    
        let localStorageSavedValue
        if(!localStorageValue) {
          localStorage.setItem(itemKey, JSON.stringify(initValue))
          localStorageSavedValue = initValue
        } else {
          localStorageSavedValue = JSON.parse(localStorageValue)
        }
        
        setStorageState(localStorageSavedValue)
        setLoading(false)
      } catch (error) {
        setErrors([error])
        setLoading(false)
      }
    }, 2000)
  }, [itemKey, initValue])

  const saveStorageState = (values) => {
    try {
      const valuesString = JSON.stringify(values)
      localStorage.setItem(itemKey, valuesString)
      setStorageState(values)
    } catch (error) {
      setErrors([error])
      setLoading(false)
    }
  }

  return {
    storageState,
    saveStorageState,
    loading,
    errors
  }
}

// this is clean beacuase es pure state an logic withouth UI layout/structure
function App() { 
  const {
    storageState: todos, 
    saveStorageState: saveTodos,
    loading,
    errors
  } = useLocalStorage('TODOS_V1', [])

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
      loading = {loading}
      errors = {errors}
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
