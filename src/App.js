import Characters from "./components/Characters";
import Header from "./components/Header";
import Search from "./components/Search";
import Showcase from "./components/Showcase";
import { useState } from "react";
import SearchResult from "./components/SearchResults";

const App = () => {
  const [results, setResults] = useState([]);

  const addResult = (result) => {
    setResults([...results, result]);
  };

  return (
    <div className="App">
      <Header />
      <Showcase />
      <Characters />
      <Search onAdd={addResult} />
      <SearchResult results={results} />
    </div>
  );
};

export default App;
