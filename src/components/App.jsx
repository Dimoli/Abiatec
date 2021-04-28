import Header from "./Header";
import ContentList from "./ContentList";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";

const App = () => {
  const [content, fetch] = useFetchContent();

  return (
    <div className="App">
      <Header onSearch={fetch} />
      <h1 className="content-header">Simple content list</h1>
      <ContentList content={content} />
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  );
};

export default App;
