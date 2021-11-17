import React from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "../data/BooksAPI";
import "../css/App.css";
import "../css/base.css";
import Cabecalho from "../pag/Cabecalho";
import Rodape from "../pag/Rodape";
import { Fragment } from "react";
import Search from "./Search";
import book from '../images/book.png'


class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then((response) => {
      changedBook.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books
          .filter((book) => book.id !== changedBook.id)
          .concat(changedBook),
      }));
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <Fragment>
                  <Cabecalho/>
                  <Rodape/>
                </Fragment>
                <div>
                  <img className="main"  src={book} />
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
