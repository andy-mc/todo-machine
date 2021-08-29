import './App.css';

import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch/'
import {TodoList} from './components/TodoList'
import {CreateTodo} from './components/CreateTodo'

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <CreateTodo />
    </>
  );
}

export default App;
