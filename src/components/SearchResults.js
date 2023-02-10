import SearchResult from './SearchResult';

const SearchResults = ({ results }) => {
	return (
		<>
			{results.map((result) => (

				<SearchResult key={result.id} result={result} />

				<div key={result.id}>
					<SearchResult result={result} />
				</div>

			))}
		</>
	);
};

export default SearchResults;
