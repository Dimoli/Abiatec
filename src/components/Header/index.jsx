import SearchInput from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./index.css";
// can use "props" instead "{ onSearch, inputValue, setInputValue }" params
// and spread it ({...props}) on SearchInput, but that way worsens clarity
const Header = ({ onSearch, inputValue, setInputValue }) => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <SearchInput
      onSearch={onSearch}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  </header>
);

export default Header;
