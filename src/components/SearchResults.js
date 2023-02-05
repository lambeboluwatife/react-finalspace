import SearchResult from "./SearchResult";

const SearchResults = ({ results }) => {
  return (
    <>
      {results.map((result, index) => (
        <SearchResult key={index} result={result} />
      ))}
    </>
  );
};

export default SearchResults;
