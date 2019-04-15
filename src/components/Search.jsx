import React from 'react';


function Search() {
  const border = {
    border: '2px #349cdf solid',
    borderRadius: '8px',
    height: '2vh',
    marginLeft: '10px'
  }
  return(
    <div>
      <input style={border} type="text" placeholder="search"></input>
      <button style={border}>tweet</button>
    </div>
  );
}

export default Search;
