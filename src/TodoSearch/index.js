import React from 'react';
import {TodoConsumer} from '../TodoContext'
import './TodoSearch.css'

function TodoSearch() {    
  return (
    <TodoConsumer>
      {({searchValue, setSearchValue}) => {
        const handleSearch = (event) => {
            const searchIput = event.target.value;
            console.log('searchIput:', searchIput)
            setSearchValue(searchIput)
        }

        return (
            <>
            <input 
                value={searchValue} 
                onChange={handleSearch} 
                type="text" 
                className="search" 
                placeholder="Busca tu todo"
            >
            </input>
            </>
        )
      }}
    </TodoConsumer>
  ) 
}

export {TodoSearch}