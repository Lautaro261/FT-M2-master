import React from 'react';

export default function Card({name, min, max, img, onclose}) {
  // acá va tu código
  return (
  <div>
    <button onClick={onclose}>x</button>
    <h4>{name}</h4>
    <p>Min : {min}°</p>
    <p>Max : {max}°</p>
    <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt='found not defi'/>

   </div>)


};