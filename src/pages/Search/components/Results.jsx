import React from 'react'
import Book from '../../../components/Book'
import PropTypes from 'prop-types'

function Results({ books, onAddToList, shelves }) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(book => <Book shelves={shelves} key={book.id} book={book} onAddToList={onAddToList} />)}
      </ol>
    </div>
  )
}

Results.propTypes = {
  books: PropTypes.array.isRequired,
  onAddToList: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired
}

export default Results
