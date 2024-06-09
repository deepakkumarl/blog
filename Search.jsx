import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); }}>
      <input
        className="inpp"
        type="text"
        placeholder="Search Task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
