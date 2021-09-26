import React from 'react';
import {TodoContext} from '../TodoContext'
import './CreateTodo.css';

function CreateTodo({counter}) {
  const {increaseCounter} = React.useContext(TodoContext) 

  function onClickButton () {
    alert('tatata !!')
  }
  
  return (
    <button className="CreateTodoButton" onClick={counter ? increaseCounter: onClickButton}>
      +
    </button>
  )
}

export {CreateTodo}
