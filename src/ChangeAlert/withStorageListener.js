import React from 'react';

const withStorageListener = (Wrapped) => {
  return (props) => {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        setStorageChange(true)  
      }
    })

    function updateStorage() {
      setStorageChange(false)
      props.syncTodos()
    }

    return (
      <>
        <Wrapped storageChange={storageChange} updateStorage={updateStorage} />
      </>
    )
  }
}

export {withStorageListener}
