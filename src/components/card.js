import React, { useState } from 'react';

function Card(props) {
    const [clickedOn, setClickedOn] = useState(false);

  return (
    <div className='card'>
        <img className='pokeImg' src={props.link} alt='pokemon' onClick={() => setClickedOn(true)}></img>
    </div>
  );
}

export default Card;