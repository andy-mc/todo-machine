import React from 'react';
import {TodoItem} from '../TodoItem';

function TodoList({todos, setTodos}) {
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

    return todos.map((todo) => <TodoItem key={todo._id} todo={todo} onComplete={onComplete} onDelete={onDelete} />)
}

export {TodoList}