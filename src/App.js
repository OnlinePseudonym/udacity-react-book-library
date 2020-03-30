import React from 'react'
import { Route } from 'react-router-dom'
import { get, set } from 'idb-keyval'
import './App.css'

import Home from './pages/Home/'
import Search from './pages/Search/'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    get('currentlyReading')
      .then(storedBooks => this.setState(() => ({currentlyReading: storedBooks || [] })))
    get('wantToRead')
      .then(storedBooks => this.setState(() => ({wantToRead: storedBooks || []})))    
    get('read')
      .then(storedBooks => this.setState(() => ({read: storedBooks || []})))
  }

  addToList = (list, book) => {
    Object.keys(this.state).forEach(stateKey => {
      const bookIndex = this.state[stateKey].findIndex(storedBook => storedBook.id === book.id)
      if (bookIndex > -1) {
        const filteredBooks = this.state[stateKey].filter((_book, i) => i !== bookIndex);
        this.setState(() => ({ [stateKey]: filteredBooks }))
        set(stateKey, filteredBooks);
      }
    })

    this.setState(oldState => ({ [list]: [...oldState[list], book]}))
    set(list, [...this.state[list], book]);
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
