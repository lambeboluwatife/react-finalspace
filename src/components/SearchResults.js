import SearchResult from './SearchResult';

const SearchResults = ({ results }) => {
	return (
		<>
			{results.map((result) => (
				<SearchResult key={result.id} result={result} />
			))}
		</>
	);
};

export default SearchResults;
