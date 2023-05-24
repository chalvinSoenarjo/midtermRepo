import React, { useState } from "react";

interface Props {
  books: {
    id: number;
    name: string;
    author: string;
    coAuthor?: string;
    coverImg: string;
    sequels?: string[];
    rating: number;
  }[];
  setCurrentBookIndex: (idx: number) => void;
}

export default function BookList({ books, setCurrentBookIndex }: Props) {
  const [selectedBookId, setSelectedBookId] = useState(0);

  const handleBookClick = (bookId: number) => {
    setCurrentBookIndex(bookId);
    setSelectedBookId(bookId);
  };

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li
          key={book.id}
          onClick={() => handleBookClick(book.id)}
          className={selectedBookId === book.id ? "selected" : ""}
        >
          {book.name}
        </li>
      ))}
    </ul>
  );
}
