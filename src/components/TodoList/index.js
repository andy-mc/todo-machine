import React from 'react';
import {TodoItem} from '../TodoItem';

function TodoList({todos}) {
    return todos.map((todo) => <TodoItem key={todo._id} text={todo.text} completed={todo.completed} />)
}

export {TodoList}