import { useState } from "react";

const Search = ({ onAdd }) => {
  const [search, setSearch] = useState("");

  const getAPI = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Enter Character Name");
    } else {
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
          }
      
          fetch("https://finalspaceapi.com/api/v0/character")
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              // console.log(data);
              data.forEach((character) => {
                if (character.name.includes(capitalize(search))) {
                  console.log(character.id, character.name);
                  onAdd({ character })
                }
              });
            });
      
          setSearch('')
    }
  };

  return (
    <div className="form text-center">
      <form className="form-content">
        <h5>Search Character</h5>
        <input
          id="input"
          type="search"
          value={search}
          required
          placeholder="Enter Character"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="alert text-center"></div>
        <center>
          <input
            onClick={getAPI}
            className="btn"
            type="submit"
            value="Search"
          />
        </center>
      </form>
    </div>
  );
};

export default Search;
