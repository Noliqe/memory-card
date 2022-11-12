// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import Card from './card';
import RandomCard from './randomCard';


function Game() {
  const [cards, setCards] = useState(RandomCard());

  const ifClickedOn = (index) => {
    if (cards[index].clickedOn === false) {
      let prevCards = cards;
      prevCards[index].clickedOn = true;
      setCards(prevCards);
      onClick();
    } else {
      console.log('gameover');
    }
  }

  const onClick = () => {
    setCards(shuffle());
  }

    // shuffle cards array
  const shuffle = () => {
    let shuffled = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    return shuffled;
  }

  // when cards change, call function level
  useEffect(() => {
    level();
  }, [cards]);

  const level = () => {
    const pokeArray = [];
    for (let i = 0; i < 5; i++) {
        const num = cards[i].id;
        const pokeUrl = cards[i].src;
        pokeArray.push(<Card key={num} id={num} index={i} src={pokeUrl} check={ifClickedOn}/>)
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