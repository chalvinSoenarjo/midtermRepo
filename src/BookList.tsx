import React from "react";

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
  return (
    <ul>
      {books.map((book) => (
        <li onClick={() => setCurrentBookIndex(book.id)} key={book.id}>
          {book.name}
        </li>
      ))}
    </ul>
  );
}
