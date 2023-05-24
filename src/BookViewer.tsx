import React from "react";

interface Props {
  currentBook: {
    id: number;
    name: string;
    author: string;
    coAuthor?: string;
    coverImg: string;
    sequels?: string[];
    rating: number;
  };
}

export default function BookViewer({ currentBook }: Props) {
  const { author, coAuthor, sequels, rating, coverImg } = currentBook;

  const renderSequels = () => {
    if (sequels && sequels.length > 0) {
      return (
        <ul>
          {sequels.map((sequel, index) => (
            <li key={index}>{sequel}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const renderRating = () => {
    const stars = "⭐️".repeat(rating);
    return <div>{stars}</div>;
  };

  return (
    <div className="book-viewer">
      <div className="book-image">
        <img src={coverImg} alt={currentBook.name} style={{ width: "500px", height: "500px" }} />
      </div>
      <div className="book-details" >
        <div>
          <h2>Author: {author}</h2>
          {coAuthor && <h3>Co-Author: {coAuthor}</h3>}
        </div>
        <div>
          <h3>Sequels:</h3>
          {renderSequels()}
        </div>
        <div>
          <h3>Rating: {renderRating()}</h3>
        </div>
      </div>
    </div>
  );
}
