import React from 'react';
import {TodoConsumer} from '../TodoContext'
import './CreateTodo.css';

function CreateTodo({counter}) {
  function onClickButton () {
    alert('tatata !!')
  }

  return <TodoConsumer>
    {({increaseCounter}) => (
      <button className="CreateTodoButton" onClick={counter ? increaseCounter: onClickButton}>
        +
      </button>
    )}
  </TodoConsumer>
}

export {CreateTodo}
