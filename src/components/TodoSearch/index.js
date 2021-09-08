import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
    const handleSearch = (event, aaaaa, bbbb, cccccc) => {
        console.log('event onChage from search', event.target.value)
    }

    return <input onChange={handleSearch} className="search" type="text" placeholder="Busca tu todo"></input>
}

export {TodoSearch}