import React from 'react';
import s from './SearchBar.Module.css';


export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.btn}>
      <input type="text" placeholder='🔍Cuidad...' />
      <button onClick={() => props.onSearch('Buscando...')}>Agregar</button>
    </div>
    )
};