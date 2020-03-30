import React from 'react'
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger'

function Book({ book, onAddToList, shelves }) {
  // find the shelf if any that the book currently exists on
  const shelf = shelves.filter(shelf => shelf.books.findIndex(shelfBook => book.id === shelfBook.id) > -1)
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks?.smallThumbnail}")` }}></div>
          <ShelfChanger onAddToList={onAddToList} book={book} shelf={shelf.length > 0 ? shelf[0].alias : 'none'} />
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
