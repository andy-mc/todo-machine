import './App.css';

import {Background} from '../Background'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {CreateTodo} from '../CreateTodo'

function App() {
  const todos = [
    {id: 1, text: 'hacer ejercicio', completed: false},
    {id: 2, text: 'leer', completed: false},
    {id: 3, text: 'comer sano', completed: true}
  ]

  return (  
    <Background>
      <div className="container">
        <div className="canvas">
          <TodoCounter />
          <TodoSearch />
          <TodoList todos={todos} />
          <CreateTodo />
        </div>
      </div>
    </Background>
  );
}

export default App;
