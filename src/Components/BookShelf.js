import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ books, title, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b) => (
            <li key={b.title}>
              <Book book={b} changeShelf={changeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default BookShelf;
