import {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export function useTodos() {
  const {
    storageState: todos, 
    saveStorageState: saveTodos,
    syncLocalStorage: syncTodos,
    errors,
    loading,
  } = useLocalStorage('TODOS_V1', [])

  const [count, setCount] = useState(0);
  const [searchValue, setSearchValue] = useState('')
  const [showModal, setShowModal] = useState(false);

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

  const createTodo = (todo) => {
    todo._id = todos.length + 1
    todo.completed = false
    
    saveTodos([...todos, todo])
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

  const showModalHandler = (modal_state) => {
    setShowModal(modal_state)
  }

  return {
    completeTodo,
    completedTodos,
    createTodo,
    deleteTodo,
    errors,
    filteredTodos,
    increaseCounter,
    loading,
    searchValue,
    setSearchValue,
    showModal, 
    showModalHandler,
    syncTodos,
    totalTodos,
  }
}
