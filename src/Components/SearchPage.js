import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const SearchPage = ({
  changeShelf,
  search,
  setSearch,
  searchedBooks,
  books,
}) => {
  searchedBooks.filter((currentBook) => {
    books.forEach((b) => {
      if (b.id === currentBook.id) {
        currentBook.shelf = b.shelf;
        return currentBook;
      } else if (typeof currentBook.shelf === "undefined") {
        currentBook.shelf = "none";
        return currentBook;
      }
    });
  });
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((b) => (
            <li key={b.id}>
              <Book book={b} changeShelf={changeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
