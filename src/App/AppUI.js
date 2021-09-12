import './App.css';

import {Background} from '../Background'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodo} from '../CreateTodo'

// this is clean because is pure UI withOut state
// how it can be cleanUp all this props are too much
// visualize when your apps grows this is not mantainable
// this can be clean up using a provider
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
    // this is clean because is pure UI structure with a logic in a different file
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
