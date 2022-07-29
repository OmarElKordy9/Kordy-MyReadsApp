import React from "react";
import MainPage from "./MainPage";

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
        <button onClick={() => setShowSearchPage(true)}>Add a book</button>
      </div>
    </div>
  );
};

export default BooksPage;
