import React, {Component} from 'react'

class ListSelector extends Component {

state = {
    value: this.props.book.shelf!==undefined ? this.props.book.shelf: 'none'
}


handleChange = (event) => {
    this.setState({value: event.target.value})
    if(this.props.addBook){    
    this.props.addBook(this.props.book, event.target.value)
    }
}


render(){
    return (
    <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading" >Currently Reading</option>
            <option value="wantToRead" >Want to Read</option>
            <option value="read" >Read</option>
            <option value="none" >None</option>
        </select>
    </div>
    )
   }
}

export default ListSelector;

