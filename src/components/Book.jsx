import React from 'react'
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger'

function Book({ book, onAddToList }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks?.smallThumbnail}")` }}></div>
          <ShelfChanger onAddToList={onAddToList} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(' ,')}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  onAddToList: PropTypes.func.isRequired
}

export default Book
