import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
  const handleSearch = event => setSearchValue(event.target.value);

  return (
      <input 
        value={searchValue} 
        onChange={handleSearch} 
        type="text" 
        className="search" 
        placeholder="Busca tu TODO !!"
      >
      </input>
  )
}

export {TodoSearch}
