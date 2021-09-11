import React from 'react';
import {TodoItem} from '../TodoItem';

function TodoList({todos, onComplete, onDelete}) {
    return todos.map((todo) => (
      <TodoItem 
        key={todo._id} 
        todo={todo} 
        onComplete={()=>{onComplete(todo._id)}} 
        onDelete={()=>{onDelete(todo._id)}} 
      />
    ))
}

export {TodoList}