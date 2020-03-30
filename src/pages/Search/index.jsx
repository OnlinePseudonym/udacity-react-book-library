import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

class Search extends Component {
  static propTypes = {
    onAddToList: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  state = {
    searchResults: []
  }

  updateResults = searchResults => {
    if (searchResults) {
      this.setState(() => ({ searchResults: searchResults.hasOwnProperty('error') ? searchResults.items : searchResults }))
    } else {
      this.setState(() => ({ searchResults: [] }))
    }
  }

  render() {
    return(
      <div className="search-books">
        <SearchBar onGetResults={this.updateResults} />
        <Results shelves={this.props.shelves} books={this.state.searchResults} onAddToList={this.props.onAddToList} />
      </div>
    )
  }
}

export default Search