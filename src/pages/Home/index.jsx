import React from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './components/Bookshelf'

function Home({ shelves, onAddToList }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, i) => <BookShelf key={i} books={shelf.books} title={shelf.title} shelves={shelves} onAddToList={onAddToList} />)}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>

  )
}

export default Home