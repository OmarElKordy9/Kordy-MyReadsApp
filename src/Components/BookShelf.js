import React from "react";
import Book from "./Book";

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

export default BookShelf;
