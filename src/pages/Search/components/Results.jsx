import React from 'react'

function Results({ books }) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(book => <div>{book.title}</div>)}
      </ol>
    </div>
  )
}

export default Results
