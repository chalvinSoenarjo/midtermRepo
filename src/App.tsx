import { useState } from "react";
import BookViewer from "./BookViewer";
import BookList from "./BookList";
import { books } from "./newdata";
import "./App.css";

function App() {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  return (
    <div className="App">
      <BookViewer currentBook={books[currentBookIndex]} />
      <BookList setCurrentBookIndex={setCurrentBookIndex} books={books} />
    </div>
  );
}

export default App;
