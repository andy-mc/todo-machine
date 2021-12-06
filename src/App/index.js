import React from 'react';
import './App.css';

import {Background} from '../Background'
import {ChangeAlert} from '../ChangeAlert'
import {Modal} from '../Modal'
import {PlusButton} from '../PlusButton'
import {TodoCounter} from '../TodoCounter'
import {TodoForm} from '../TodoForm'
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList'
import {TodoSearch} from '../TodoSearch'
import {useTodos} from './useTodos'

function App() {
  const {
    completeTodo, 
    completedTodos, 
    createTodo,
    deleteTodo,
    errors, 
    filteredTodos, 
    increaseCounter, 
    loading, 
    searchValue, 
    setSearchValue,
    showModal,
    showModalHandler,
    syncTodos, 
    totalTodos,
  } = useTodos()
  
  return (
    // this is clean because is pure UI structure with a logic in useTodos
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
          <TodoForm showModalHandler={showModalHandler} createTodo={createTodo} />
        </Modal>
      }

      <div className="footer">
        <PlusButton action={increaseCounter} />
        <PlusButton action={() => showModalHandler(true)} />
      </div>

      <ChangeAlert syncTodos={syncTodos} />
    </Background>
  );
}

export {App};
