import { useCallback } from "react";
import Button from "../Button";
import "./index.css";

const SearchInput = ({ onSearch, inputValue, setInputValue }) => {
  const onSearchChange = useCallback((e) => setInputValue(e.target.value), [
    setInputValue,
  ]);
  const onSubmit = useCallback(() => onSearch(inputValue), [
    inputValue,
    onSearch,
  ]);

  return (
    <div className="SearchInput">
      <input value={inputValue} onChange={onSearchChange} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default SearchInput;
