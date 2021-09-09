import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    
    
    const handleSearch = (event) => {
        const searchIput = event.target.value;
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
        <p>{searchValue}</p>
        </>
    ) 
}

export {TodoSearch}