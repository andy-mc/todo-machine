import React, {useState} from 'react';
import {TodoContext} from '../TodoContext'
import './TodoForm.css'

function TodoForm(){
  const {setShowModal, createTodo} = React.useContext(TodoContext)
  const [textTodo, setTextTodo] = useState('')
  
  function handleTextArea(event) {
    const text_input = event.target.value;
    setTextTodo(text_input)
  }

  function closeModal() {
    setShowModal(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    createTodo({text: textTodo})
    setShowModal(false)
  }

  return <form onSubmit={handleSubmit}>
    <label>Escribe tu nuevo TODO !!</label>
    <textarea 
      value={textTodo}
      onChange={handleTextArea} 
      placeholder='Escribe tu nuevo TODO !!'
    />
    <div className="TodoForm-buttonContainer">
      <button type="buttom" onClick={closeModal} className="TodoForm-button TodoForm-button--cancel">Cerrar</button>
      <button type="submit" className="TodoForm-button TodoForm-button--add">Crear</button>
    </div>
  </form>
}

export {TodoForm}