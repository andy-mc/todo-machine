import React from 'react';
import './CreateTodo.css'

function CreateTodo({handleClick}) {
    function onClickButton () {
        alert('tatata !!')
    }

    return <button 
        className="CreateTodoButton"
        onClick={handleClick ? handleClick: onClickButton}
    >
        +
    </button>
}

export {CreateTodo}