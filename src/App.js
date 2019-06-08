import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './Shelves'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books :[],
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=>({
          books
        }))
      })
    }

  
  searchBooks = (query) =>{
    BooksAPI.search(query)
      .then((searchResults)=>{
        if(searchResults!==undefined && searchResults.length>0){
        searchResults = searchResults.map((b)=>(
          this.state.books.find((item)=>{return item.id === b.id})!==undefined
          ? this.state.books.find((item)=>{return item.id === b.id}) 
          : b
          ))
        this.setState(()=>({
          searchResults
        }))}
        else{
          this.setState(()=>({
            searchResults:[]
          }))
        }
      })
    }


  updateBook = (newBook, newShelf) => {
    newBook.shelf = newShelf;
    BooksAPI.update(newBook, newShelf).then(
      this.setState((currentState)=>({
        books: [...currentState.books.filter((b)=>{return b.id!==newBook.id}), newBook]
      }))
    )
  } 

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={( history ) => (
          <Shelves 
            books={this.state.books}
            addBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
        )} />
        <Route path='/search' render={()=>(
          <BookSearch
            searchBooks={this.searchBooks}
            searchResults={this.state.searchResults}
            addBook={(book, shelf) => {
              this.updateBook(book, shelf) 
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
