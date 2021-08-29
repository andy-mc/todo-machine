import React from 'react';
import {TodoItem} from '../TodoItem';

function TodoList({todos}) {
    return todos.map((todo) => <TodoItem key={todo} text={todo.text} />)
}

export {TodoList}