import React from 'react';
import './CreateTodo.css'

function CreateTodo() {
    function onClickButton () {
        alert('tatata !!')
    }

    return <button 
        className="CreateTodoButton"
        onClick={onClickButton}
    >
        +
    </button>
}

export {CreateTodo}