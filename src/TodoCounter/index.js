import React from 'react';
import './TodoCounter.css'
import {TodoContext} from '../TodoContext'

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext) 
  
  return <p className="counter">Has completado {completedTodos} de {totalTodos} todos</p>
}

export {TodoCounter}