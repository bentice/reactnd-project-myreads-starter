import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class Shelves extends Component {

    /*shouldComponentUpdate(nextProps) {
        return nextProps.books !== this.props.books
      }*/

    render () {

        return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>Shelves</h1>
            </div>
              <div className="list-books-content">
                <div>
                  <Shelf book_list={this.props.books} shelf={"currentlyReading"} name={"Currently Reading"} addBook={this.props.addBook} />
                  <Shelf book_list={this.props.books} shelf={"wantToRead"} name={"Want"} addBook={this.props.addBook} />
                  <Shelf book_list={this.props.books} shelf={"read"} name={"Read"} addBook={this.props.addBook} />
                </div>
              </div>
            <div className="open-search button">
                <Link 
                    to='/search'>Add a book
                </Link>
            </div>
        </div>
        );
    }
}

export default Shelves