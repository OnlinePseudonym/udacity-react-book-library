import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    onAddToList: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object
  }

  state = {
    listName: this.props.shelf
  }

  handleChange = e => {
    const listName = e.target.value
    this.setState(() => ({ listName }))
    this.props.onAddToList(listName, this.props.book)
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select value={this.state.listName} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
