import "./App.css";
import React, { useEffect, useState } from "react";
import MainPage from "./Components/MainPage";
import * as BooksAPI from "./BooksAPI";
import Book from "./Components/Book";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setBooks(res);
    });
  }, []);

  useEffect(() => {
    let isActive = true;
    if (search) {
      BooksAPI.search(search).then((res) => {
        if (!res.error && isActive) {
          console.log(res);
          setSearchedBooks(res);
        } else {
          setSearchedBooks([]);
        }
      });
    }
    return () => {
      isActive = false;
      setSearchedBooks([]);
    };
  }, [search]);

  const changeShelf = (book, desiredShelf) => {
    const updatedBooks = books.map((b) => {
      if (b.title === book.title) {
        book.shelf = desiredShelf;
        return book;
      }
      return b;
    });
    setBooks(updatedBooks);
    BooksAPI.update(book, desiredShelf);
  };
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => setShowSearchPage(!showSearchPage)}
            >
              Close
            </button>
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
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <MainPage books={books} changeShelf={changeShelf} />
          </div>
          <div className="open-search">
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
