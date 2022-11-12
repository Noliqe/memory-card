import React, { useState } from 'react';

const Card = (props) => {

  return (
    <div className='card'>
        {/* <img className='pokeImg' src={props.link} alt='pokemon' onClick={() => setClickedOn(true)}></img> */}
        <img className='pokeImg' src={props.src} alt='pokemon' onClick={() => {props.check(props.index)}}></img>
    </div>
  );
};

export default Card;