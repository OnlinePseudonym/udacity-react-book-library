import React from 'react'
import { Route } from 'react-router-dom'
import ShelfChanger from './ShelfChanger'

function Book({ book }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks?.smallThumbnail}")` }}></div>
          <Route
            exact path='/'
            component={ShelfChanger}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(' ,')}</div>
      </div>
    </li>
  )
}

export default Book
