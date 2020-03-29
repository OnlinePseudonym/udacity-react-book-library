import React from 'react'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

function Search() {
  return(
    <div className="search-books">
      <SearchBar />      
      <Results />
    </div>
  )
}

export default Search