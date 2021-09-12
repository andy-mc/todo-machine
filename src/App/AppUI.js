import './App.css';

import {Background} from '../Background'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodo} from '../CreateTodo'

// how it can be cleanUp all this props are too much
function AppUI({
    completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    filteredTodos,
    completeTodo, 
    deleteTodo, 
    increaseCounter
  }) { 
  return (  
    <Background>
      <div className="container">
        <div className="canvas">
          <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList 
            todos={filteredTodos} 
            onComplete={completeTodo} 
            onDelete={deleteTodo} 
          />
          <div className="footer">
            <CreateTodo handleClick={increaseCounter} />
            <CreateTodo />
          </div>
        </div>
      </div>
    </Background>
  );
}

export {AppUI};
