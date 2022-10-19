import React from 'react';
import s from './Card.Module.css';

export default function Card({name, min, max, img, onclose}) {
  // acá va tu código
  return (
   <div className={s.contenedor}>
      <button onClick={onclose} className={s.btn}>X</button>
      <h4>{name}</h4>
    <div className={s.infoCont}>
      <div>
        <p>Min: {min}°</p>
      </div>
      <div>
        <p>Max: {max}°</p>
      </div>

      </div>
      <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt='found not defi'/>

    </div>)


};