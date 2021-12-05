import React from 'react';
import {withStorageListener} from './withStorageListener'

function ChangeAlert({storageChange, updateStorage}) {
  
  if (storageChange) {
    return (
      <>
      <p>hola mundo</p>
      <button
        onClick={updateStorage}
      >
        refresh
      </button>
      </>
    )
  }

  return <></>
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}
