import React from "react";
import MainPage from "./MainPage";
import { Link } from "react-router-dom";

const BooksPage = ({ changeShelf, setShowSearchPage, books }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <MainPage books={books} changeShelf={changeShelf} />
      </div>
      <div className="open-search">
        <Link to="/search" className="open-search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default BooksPage;
