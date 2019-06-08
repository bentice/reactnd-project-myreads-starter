import React, {Component} from 'react'
import Book from './Book'


class Shelf extends Component {

    render() {
        const showingBooks = this.props.book_list.filter((b)=>(b.shelf===this.props.shelf));

        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {showingBooks.map((book_item)=>(
                      <li><Book key={book_item.id} book={book_item} addBook={this.props.addBook}/></li>))}
                    </ol>
                  </div>
            </div>
        )
    }
}


export default Shelf