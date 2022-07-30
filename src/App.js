import "./App.css";
import React, { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./Components/SearchPage";
import BooksPage from "./Components/BooksPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const changeShelf = (book, desiredShelf) => {
    const searchedBooks = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = desiredShelf;
        return book;
      }
      return b;
    });
    setBooks(searchedBooks);
    BooksAPI.update(book, desiredShelf);
  };

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
          // console.log(books);
          // assignShelf(res);
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

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/search"
            element={
              <SearchPage
                books={books}
                changeShelf={changeShelf}
                search={search}
                setSearch={setSearch}
                searchedBooks={searchedBooks}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <BooksPage
                changeShelf={changeShelf}
                setShowSearchPage={setShowSearchPage}
                books={books}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
