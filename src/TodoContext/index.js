import React, {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider(props) {
    const {
        storageState: todos, 
        saveStorageState: saveTodos,
        loading,
        errors
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
    
      const deleteTodo = (todo_id) => {
        const newTodos = todos.filter((todo) => {
          return todo._id !== todo_id
        })
        saveTodos(newTodos)
      }
    
      const increaseCounter = () => {
        setCount(count + 1)
      }
      

    return (
        <TodoContext.Provider value={{
            loading,
            errors,
            filteredTodos,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo,
            increaseCounter,
            showModal, 
            setShowModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
const Consumer =  TodoContext.Consumer;
export {TodoProvider, TodoContext, Consumer as TodoConsumer}