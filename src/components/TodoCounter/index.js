import './TodoCounter.css'

function TodoCounter({completedTodos, totalTodos}) {
    return <p className="counter">Has completado {completedTodos} de {totalTodos} todos</p>
}

export {TodoCounter}