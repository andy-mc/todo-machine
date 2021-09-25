import './TodoCounter.css'
import {TodoConsumer} from '../TodoContext'

function TodoCounter() {
  return(
    <TodoConsumer>
      {({completedTodos, totalTodos}) => (
        <p className="counter">Has completado {completedTodos} de {totalTodos} todos</p>
      )}
    </TodoConsumer>
  )
}

export {TodoCounter}