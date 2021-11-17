import React from 'react';
import { Route } from "react-router-dom";
import * as BooksAPI from "../data/BooksAPI";
import "../css/App.css";
import "../css/base.css";
import { Fragment } from 'react';
import Cabecalho from './Cabecalho';
import ListRead from '../list/ListRead';
import Rodape from './Rodape';



class Read extends React.Component {
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
          <Route
            render={() => (
              <div className="list-books">
                <Fragment>
                  <Cabecalho/>
                  <Rodape/>
                  </Fragment>
                <ListRead books={books} changeShelf={this.changeShelf} />
              </div>
            )}
          />
      </div>
    );
  }
}

export default Read