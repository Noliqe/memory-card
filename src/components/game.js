import React, { useState } from 'react';
import Card from './card';

function Game() {

  const randomNumber = () => {
    return parseInt(Math.floor(Math.random() * 601));
  }

  const level = () => {
    const randomNum = randomNumber();
    const pokeArray = [];
    for (let i = 0; i < 5; i++) {
        const num = randomNum + i;
        const pokeUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + num + '.png';
        pokeArray.push(<Card key={num} id={num} link={pokeUrl}/>)
    }
    return <div className='poke'>
        {pokeArray}
    </div>
  }

  return (
    <div className='game'>
        {level()}
    </div>
  );
}

export default Game;