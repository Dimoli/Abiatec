import { useState, useEffect, useCallback } from "react";

import Header from "./Header";
import ContentList from "./ContentList";
import FetchMoreButton from "./FetchMoreButton";

import { useFetchContent } from "../hooks/useFetchContent";

import "./App.css";

const App = () => {
  const [content, fetch, fetchMore, fetchMoreInfo] = useFetchContent();
  const [inputValue, setInputValue] = useState("");
  const fetchMoreImages = useCallback(() => fetchMore(inputValue), [
    inputValue,
    fetchMore,
  ]);
  const hasMoreContent = fetchMoreInfo.count !== content.length;

  // it's stab, better to calculate the height of the screen through useRef or something else
  useEffect(() => window.scrollBy({ top: 1000, behavior: "smooth" }), [
    content,
  ]);

  return (
    <div className="App">
      <Header
        onSearch={fetch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <h1 className="ContentHeader">Simple content list</h1>
      <ContentList content={content} />
      <FetchMoreButton onClick={fetchMoreImages}>
        {hasMoreContent
          ? "Fetch more"
          : "No more content with current search. Please, change search value."}
      </FetchMoreButton>
    </div>
  );
};

export default App;
