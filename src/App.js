import "./App.css";
import React, { useEffect, useState } from "react";
import MainPage from "./Components/MainPage";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      console.log(res);
      setBooks(res);
    });
  }, []);

  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);

  const changeShelf = (book, desiredShelf) => {
    const updatedBooks = books.map((b) => {
      if (b.title === book.title) {
        book.shelf = desiredShelf;
        return book;
      }
      return b;
    });
    setBooks(updatedBooks);
    BooksAPI.update(book, desiredShelf).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              href="www.google.com"
              className="close-search"
              onClick={() => setShowSearchPage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <MainPage books={books} changeShelf={changeShelf} />
          </div>
          <div className="open-search">
            <a href="www.google.com" onClick={() => setShowSearchPage(false)}>
              Add a book
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
