import './App.css';

import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch/'
import {TodoList} from './components/TodoList'
import {CreateTodo} from './components/CreateTodo'

function App() {
  const todos = [
    {id: 1, text: 'hacer ejercicio', completed: false},
    {id: 2, text: 'leer', completed: false},
    {id: 3, text: 'comer sano', completed: true}
  ]

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList todos={todos} />
      <CreateTodo />
    </>
  );
}

export default App;
