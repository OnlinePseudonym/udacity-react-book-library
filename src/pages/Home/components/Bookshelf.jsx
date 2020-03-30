import React from 'react'

import Book from '../../../components/Book'

function Bookshelf ({ books, title, onAddToList, shelves }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map(book => <Book key={book.id} book={book} shelves={shelves} onAddToList={onAddToList} /> )}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf
