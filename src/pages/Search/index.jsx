import React, { Component } from 'react'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

class Search extends Component {
  state = {
    searchResults: []
  }

  updateResults = searchResults => {
    this.setState(() => ({ searchResults }))
  }

  render() {
    return(
      <div className="search-books">
        <SearchBar onGetResults={this.updateResults} />
        <Results books={this.state.searchResults} />
      </div>
    )
  }
}

export default Search