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
    return (
      <div className="app">
        <Route exact path='/' component={Home} />
        <Route path='/add-book' render={() => (
          <Search onAddToList={this.addToList} />
        )} />
      </div>
    )
  }
}

export default BooksApp
