
import Characters from "./components/Characters";
import Header from "./components/Header";
import Search from "./components/Search";
import Showcase from "./components/Showcase";
import { useState } from "react";
import SearchResults from "./components/SearchResults";

import { useState } from 'react';
import Characters from './components/Characters';
import Header from './components/Header';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Showcase from './components/Showcase';


const App = () => {
	const [results, setResults] = useState([]);

	const addResult = (result) => {
		// DELETE
		// [ if your useState requires the previous state, you can pass a callback to setState which provides the value of the previous state for you to use inside the setState:
		// eg: const [count, setCount] = useState()
		// bad
		// setCount(count + 1)
		// good
		// setCount((previousCount) => previousCount + 1)


  return (
    <div className="App">
      <Header />
      <Showcase />
      <Characters />
      <Search onAdd={addResult} />
      <SearchResults results={results} />
    </div>
  );

		//  you can replace PreviousCount with any name of your choice
		// this makes the state async and prevents errors when it is called externally]

		setResults((prevResults) => [...prevResults, result]);
	};

	return (
		<div className="App">
			<Header />
			<Showcase />
			<Characters />
			<Search onAdd={addResult} />
			<SearchResults results={results} />
		</div>
	);
};

export default App;
