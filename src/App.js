import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Home from './pages/Home/'
import Search from './pages/Search/'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  addToList = (list, book) => {
    this.setState(oldState => ({ [list]: [...oldState[list], book]}))
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state  
    const shelves = [
      {
        alias: 'currentlyReading',
        title: 'Currently Reading',
        books: currentlyReading
      },
      {
        alias: 'wantToRead',
        title: 'Want to Read',
        books: wantToRead
      },
      {
        alias: 'read',
        title: 'Read',
        books: read
      }
    ]
    
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home shelves={shelves} onAddToList={this.addToList} />
        )} />
        <Route path='/add-book' render={() => (
          <Search shelves={shelves} onAddToList={this.addToList} />
        )} />
      </div>
    )
  }
}

export default BooksApp
