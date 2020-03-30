import React from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './components/Bookshelf'

function Home({ currentlyReading, wantToRead, read, onAddToList }) {
  const shelves = [
    {
      title: 'Currently Reading',
      books: currentlyReading
    },
    {
      title: 'Want to Read',
      books: wantToRead
    },
    {
      title: 'Read',
      books: read
    }
  ]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, i) => <BookShelf key={i} books={shelf.books} title={shelf.title} onAddToList={onAddToList} />)}
        </div>
      </div>
      <div className="open-search">
        <Link to='/add-book'>Add a book</Link>
      </div>
    </div>

  )
}

export default Home