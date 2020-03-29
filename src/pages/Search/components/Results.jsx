import React from 'react'
import Book from '../../components/Book'

function Results({ books }) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(book => <Book book={book} />)}
      </ol>
    </div>
  )
}

export default Results
