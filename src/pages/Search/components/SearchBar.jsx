import React, { Component } from 'react'
import * as BooksAPI from '../../../BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  state = {
    query: ''
  }

  // update input state and perform booksapi search based on query
  // send result back to appropriate anscestor to handle displaying in ui
  updateQuery = query => {
    this.setState(() => ({ query }))
    BooksAPI.search(query)
      .then(res => this.props.onGetResults(res));
  }

  render() {
    return(
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={e => this.updateQuery(e.target.value)} />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onGetResults: PropTypes.func
}

export default SearchBar