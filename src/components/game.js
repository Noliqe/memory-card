// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import Card from './card';
import RandomCard from './randomCard';
import Scoreboard from './scoreboard';


function Game() {
  const [cards, setCards] = useState(RandomCard());
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // check if card is already clicked on
  const ifClickedOn = (index) => {
    if (cards[index].check === false) {
      let prevCards = cards;
      prevCards[index].check = true;
      // replace cards with updated array
      setCards(prevCards);
      // add 1 to current score
      setCurrentScore(currentScore + 1);
      onClick();
    } else {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      // set current score back to zero
      setCurrentScore(0);
      console.log('gameover');
    }
  }

  const gameOver = () => {
    //empty
  }

  const onClick = () => {
    console.log('shuffle cards');
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
        <Scoreboard current={currentScore} highScore={highScore}/>
        {level()}
    </div>
  );
}

export default Game;