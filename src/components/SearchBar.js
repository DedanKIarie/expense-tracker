import React from 'react';

function SearchBar({ setSearch }) {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search expenses..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    );
  }
export default SearchBar;
