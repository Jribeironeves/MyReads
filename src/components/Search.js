import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import "../css/App.css";
import * as BooksAPI from "../data/BooksAPI";

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    newBooks: [],
    searchErr: false,
  };

  getBooks = (event) => {
    const query = event.target.value;
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 0).then((books) => {
        books.length > 0
          ? this.setState({ newBooks: books, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });
    } else this.setState({ newBooks: [], searchErr: false });
  };

  render() {
    const { query, newBooks, searchErr } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
          <datalist id="list">
              <option>Android</option><option>Art</option><option>Artificial Intelligence</option><option>Astronomy</option><option>Austen</option><option>Baseball</option><option>Basketball</option><option>Bhagat</option><option>Biography</option><option>Brief</option>
              <option>Business</option><option>Camus</option><option>Cervantes</option><option>Christie</option><option>Classics</option><option>Comics</option><option>Cook</option><option>Cricket</option><option>Cycling</option><option>Desai</option>
              <option>Design</option><option>Digital Marketing</option><option>Drama</option><option>Drawing</option><option>Dumas</option><option>Education</option><option>Everything</option><option>Fantasy</option><option>Film</option><option>Finance</option>
              <option>First</option><option>Fitness</option><option>Football</option><option>Future</option><option>Games</option><option>Gandhi</option><option>Homer</option><option>Horror</option><option>Hugo</option><option>Ibsen</option>
              <option>Journey</option><option>Kafka</option><option>King</option><option>Lahiri</option><option>Larsson</option><option>Learn</option><option>Literary Fiction</option><option>Make</option><option>Manage</option><option>Marquez</option>
              <option>Money</option><option>Mystery</option><option>Negotiate</option><option>Painting</option><option>Philosophy</option><option>Photography</option><option>Poetry</option><option>Production</option><option>Programming</option><option>React</option>
              <option>Redux</option><option>River</option><option>Robotics</option><option>Rowling</option><option>Satire</option><option>Science Fiction</option><option>Shakespeare</option><option>Singh</option><option>Swimming</option><option>Tale</option>
              <option>Thrun</option><option>Time</option><option>Tolstoy</option><option>Travel</option><option>Ultimate</option><option>Virtual Reality</option><option>Web Development</option><option>iOS</option>
            </datalist>
            <input type="text" list="list" value={query} onChange={this.getBooks} />
          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <ol className="books-grid">
                {newBooks.map((book) => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {searchErr && (
            <h3 className="Erro_search">Book not found. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
