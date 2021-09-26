import React from 'react';
import {TodoContext} from '../TodoContext'
import {TodoItem} from '../TodoItem';

function TodoList() {
  const {filteredTodos, completeTodo, deleteTodo} = React.useContext(TodoContext)
  return filteredTodos.map((todo) => (
    <TodoItem 
      key={todo._id} 
      todo={todo} 
      onComplete={()=>{completeTodo(todo._id)}} 
      onDelete={()=>{deleteTodo(todo._id)}} 
    />
  ))
}

export {TodoList}