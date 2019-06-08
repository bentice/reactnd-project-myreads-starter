import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookSearch extends Component {
  static propTypes = {
    searchResults: PropTypes.array.isRequired,
  }

  state = {
    query: ''
  }
  

  updateQuery = (query) => {
    
    this.setState(()=>({
        query: query
      }));

      if(this.props.searchBooks) {
        this.props.searchBooks(query)
      }  
  }


    render(){
      const { searchResults } = this.props
      const { query} = this.state

      const showingBookResults = query ==="" && query.length <= 1
        ? (searchResults)
        : searchResults.filter((b)=>(
          b.title.toLowerCase().includes(query.toLowerCase()) 
          /*|| b.authors.map((a)=>a.toLowerCase()).includes(query.toLowerCase())*/
        ))


        return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                 placeholder="Search by title or author"
                 value={query}
                 onChange={(event) => this.updateQuery(event.target.value)}
                 />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {showingBookResults.map((book_item)=>(
                <li>
                  <Book key={book_item.id} book={book_item} addBook={this.props.addBook}/>
                </li>
            ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookSearch