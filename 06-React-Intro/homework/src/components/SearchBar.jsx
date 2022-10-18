import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder='🔍Cuidad...' />
      <button onClick={() => props.onSearch('Buscando...')}>Add</button>
    </div>
    )
};