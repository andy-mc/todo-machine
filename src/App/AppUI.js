import React from 'react';
import './App.css';

import {Background} from '../Background'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodo} from '../CreateTodo'
import {TodoContext} from '../TodoContext'
import {Modal} from '../Modal'
import {TodoForm} from '../TodoForm'
import {ChangeAlert} from '../ChangeAlert'

// this is clean because is pure UI withOut state
// how it can be cleanUp all this props are too much
// visualize when your apps grows this is not mantainable
// this can be clean up using a provider
function AppUI() {
  const {
    completedTodos, 
    errors, 
    loading, 
    showModal,
    syncTodos, 
    totalTodos,
    searchValue, 
    setSearchValue
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
      <TodoList />
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
