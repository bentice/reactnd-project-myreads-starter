import React, { Component } from 'react'
import ListSelector from './ListSelector'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book : PropTypes.object.isRequired,
        addBook: PropTypes.func.isRequired,
    }
    

    render () {

     return (
     <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.imageLinks!==undefined ? this.props.book.imageLinks.thumbnail : ''})` }}></div>
          <ListSelector book={this.props.book} addBook={this.props.addBook}/>
        </div>
        <div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
    </div>
        )}
    }

export default Book;