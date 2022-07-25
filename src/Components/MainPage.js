import React from "react";
import BookShelf from "./BookShelf";

const MainPage = ({ books, changeShelf }) => {
  const current = books.filter((book) => book.shelf === "currentlyReading");
  const want = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div>
      <BookShelf
        title="Currently Reading"
        books={current}
        changeShelf={changeShelf}
      />
      <BookShelf title="Want to Read" books={want} changeShelf={changeShelf} />
      <BookShelf title="Read" books={read} changeShelf={changeShelf} />
    </div>
  );
};

export default MainPage;
