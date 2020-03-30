import React from 'react'
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger'

function Book({ book, onAddToList, shelves }) {
  const shelfWithBook = shelves.filter(shelf => shelf.books.findIndex(shelfBook => book.id === shelfBook.id) > -1)
  console.log(shelfWithBook);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks?.smallThumbnail}")` }}></div>
          <ShelfChanger onAddToList={onAddToList} book={book} shelf={shelfWithBook.length > 0 ? shelfWithBook[0].alias : 'none'} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(' ,')}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  onAddToList: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired
}

export default Book
