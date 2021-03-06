import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from '../components/BookShelf';

const ListRead = props => {
  const { books, changeShelf } = props;
  const shelfTypes = [
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {shelfTypes.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <BookShelf books={shelfBooks} changeShelf={changeShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

ListRead.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default ListRead;
