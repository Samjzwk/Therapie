import React from 'react';
import './search.scss'

function Search({searchTermFunction}) {
  return (
    <div className="search__container">
      <input type="text" placeholder='search' onChange={(e)=>searchTermFunction(e.currentTarget.value)} />
    </div>
  );
}

export default Search;
