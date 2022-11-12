// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import Card from './card';
import RandomCard from './randomCard';


function Game() {
  const [cards, setCards] = useState(RandomCard());

  const onClick = () => {
    console.log('hello');
  }

  // useEffect(() => {
  //   setCards(RandomCard());
  // }, []);

  const level = () => {
    const pokeArray = [];
    for (let i = 0; i < 5; i++) {
        const num = cards[i].id;
        const pokeUrl = cards[i].src;
        pokeArray.push(<Card key={num} id={num} link={pokeUrl} click={onClick}/>)
    };
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