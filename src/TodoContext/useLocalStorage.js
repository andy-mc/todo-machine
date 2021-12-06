import React, {useState} from 'react';

function useLocalStorage(itemKey, initValue) {
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)
    const [storageState, setStorageState] = useState(initValue)
    const [syncStorage, setSyncStorage] = useState(false)
  
    React.useEffect(() => {
      !syncStorage &&
      setTimeout(()=>{
        try {
          const localStorageValue = localStorage.getItem(itemKey)
      
          let localStorageSavedValue
          if(!localStorageValue) {
            localStorage.setItem(itemKey, JSON.stringify(initValue))
            localStorageSavedValue = initValue
          } else {
            localStorageSavedValue = JSON.parse(localStorageValue)
          }
          
          setStorageState(localStorageSavedValue)
          setLoading(false)
          setSyncStorage(true)
        } catch (error) {
          setErrors([error])
          setLoading(false)
        }
      }, 2000)
    }, [syncStorage])

    const syncLocalStorage = () => {
      setLoading(true)
      setSyncStorage(false)
    }
  
    const saveStorageState = (values) => {
      try {
        const valuesString = JSON.stringify(values)
        localStorage.setItem(itemKey, valuesString)
        setStorageState(values)
      } catch (error) {
        setErrors([error])
        setLoading(false)
      }
    }
  
    return {
      errors,
      loading,
      saveStorageState,
      storageState,
      syncLocalStorage,
    }
  }

  export {useLocalStorage}
  