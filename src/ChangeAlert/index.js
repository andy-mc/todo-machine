import React from 'react';
import {withStorageListener} from './withStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ storageChange, updateStorage}) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}
