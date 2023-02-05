const SearchResult = ({ result }) => {
  return (
    <section className="search my-1">
      <div className="container">
        <center>
          <div className="search-img text-center">
           <h6>{result.name}</h6>
          </div>
        </center>
      </div>
    </section>
  );
};

export default SearchResult;
