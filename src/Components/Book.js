import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";

const Book = ({ book, changeShelf }) => {
  const [prevBooks, setPrevBooks] = useState([]);

  prevBooks.forEach((b) => {
    if (book.id === b.id) {
      book.shelf = b.shelf;
    } else {
      book.shelf = "none";
    }
  });

  BooksAPI.getAll().then((res) => {
    setPrevBooks(res);
  });

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks && book.imageLinks.smallThumbnail
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf}
            onChange={(event) => changeShelf(book, event.target.value)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.publisher}</div>
    </div>
  );
};

export default Book;
