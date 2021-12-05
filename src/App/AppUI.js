import React from 'react';
import './App.css';

import {Background} from '../Background'
import {ChangeAlert} from '../ChangeAlert'
import {CreateTodo} from '../CreateTodo'
import {Modal} from '../Modal'
import {TodoContext} from '../TodoContext'
import {TodoCounter} from '../TodoCounter'
import {TodoForm} from '../TodoForm'
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList'
import {TodoSearch} from '../TodoSearch'


// this is clean because is pure UI withOut state
// how it can be cleanUp all this props are too much
// visualize when your apps grows this is not mantainable
// this can be clean up using a provider
function AppUI() {
  const {
    completeTodo, 
    completedTodos, 
    deleteTodo,
    errors, 
    filteredTodos, 
    loading, 
    searchValue, 
    setSearchValue,
    showModal,
    syncTodos, 
    totalTodos
  } = React.useContext(TodoContext) 
  
  return (
    // this is clean because is pure UI structure with a logic in a different file
    <Background>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {loading && errors.length === 0 && <p><br/><br/>Estamos cargando datos</p>}
      {!loading && errors.length > 0 && <p><br/><br/>ah ocurrido un Error !!</p>}
      {!loading && errors.length === 0 && totalTodos === 0 && <p><br/><br/>Por favor cree su primer TODO !!</p>}
      {!loading && errors.length === 0 && totalTodos > 0 &&
      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem 
            key={todo._id} 
            todo={todo} 
            onComplete={()=>{completeTodo(todo._id)}} 
            onDelete={()=>{deleteTodo(todo._id)}} 
          />
        ))}
      </TodoList>
      }
      
      {showModal &&
        <Modal>
          <TodoForm />
        </Modal>
      }

      <div className="footer">
        <CreateTodo counter />
        <CreateTodo />
      </div>

      <ChangeAlert syncTodos={syncTodos} />
    </Background>
  );
}

export {AppUI};
