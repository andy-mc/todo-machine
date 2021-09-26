import React from 'react';
import {TodoContext} from '../TodoContext'
import './CreateTodo.css';

function CreateTodo({counter}) {
  const {increaseCounter, setShowModal} = React.useContext(TodoContext) 

  function onClickButton () {
    setShowModal((showModal) => {
      return !showModal
    })
  }
  
  return (
    <button className="CreateTodoButton" onClick={counter ? increaseCounter: onClickButton}>
      +
    </button>
  )
}

export {CreateTodo}
