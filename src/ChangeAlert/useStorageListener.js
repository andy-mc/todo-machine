import React from 'react';

const useStorageListener = (sync) => {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        setStorageChange(true)  
      }
    })

    function updateStorage() {
      setStorageChange(false)
      sync()
    }

    return {
      storageChange,
      updateStorage
    }
}

export {useStorageListener}
