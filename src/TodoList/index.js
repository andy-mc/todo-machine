import React from 'react';
import {TodoConsumer} from '../TodoContext'
import {TodoItem} from '../TodoItem';

function TodoList() {
  return <TodoConsumer>
    {({filteredTodos, completeTodo, deleteTodo}) => (
      filteredTodos.map((todo) => (
        <TodoItem 
          key={todo._id} 
          todo={todo} 
          onComplete={()=>{completeTodo(todo._id)}} 
          onDelete={()=>{deleteTodo(todo._id)}} 
        />
      ))
    )}
  </TodoConsumer>   
}

export {TodoList}