import React from 'react';
import {useStorageListener} from './useStorageListener'
import './ChangeAlert.css'

function ChangeAlert({syncTodos}) {
  const {storageChange, updateStorage} = useStorageListener(syncTodos)

  if (storageChange) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={updateStorage}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  }

  return <></>
}

export {ChangeAlert}
