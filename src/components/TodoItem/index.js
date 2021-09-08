import React from 'react';
import './Items.css'

function TodoItem({text, completed}) {
    const onComplete = () => {
      alert(`on complete ${text}`)
    }

    const onDelete = () => {
      alert(`on deletet ${text}`)
    }

    return (
      <li className="TodoItem">
        <span onClick={onComplete} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
          √
        </span>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
          {text}
        </p>
        <span onClick={onDelete} className="Icon Icon-delete">
          X
        </span>
      </li>
    );
}

export {TodoItem};