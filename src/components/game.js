// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import Card from './card';
import RandomCard from './randomCard';
import Scoreboard from './scoreboard';


function Game() {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState(RandomCard(level));
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [renderCards, setRenderCards] = useState(0);

  // check if card is already clicked on
  const ifClickedOn = (index) => {
    if (cards[index].check === false) {
      let prevCards = cards;
      prevCards[index].check = true;
      setCards(prevCards);

      setCurrentScore(currentScore + 1);
      if (checkLevelUp() === false) {
        onClick();
      }
    } else {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      // set current score back to zero
      setCurrentScore(0);
      console.log('gameover');
    }
  }

  // check if all cards are true before level up
  const checkLevelUp = () => {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].check === false) {
        return false;
      } 
    }
    setRenderCards(1);
    setLevel(level + 1);
  }

  useEffect(() => {
    setCards(RandomCard(level));
  }, [level]);

  useEffect(() => {
    if (renderCards === 1) {
      console.log('renderCards true... load new level')
      setRenderCards(0);
      makePokeCards();
    }
  }, [cards]);

  useEffect(() => {
    if (currentScore >= highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);


  const gameOver = () => {
    //empty
  }

  const onClick = () => {
    setCards(shuffle());
  }

    // shuffle cards array
  const shuffle = () => {
    console.log('shuffle...')
    let shuffled = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    return shuffled;
  }

  const makePokeCards = () => {
    let numberOfCards = level + 2;
    const pokeArray = [];
    for (let i = 0; i < numberOfCards; i++) {
        const num = cards[i].id;
        const pokeUrl = cards[i].src;
        pokeArray.push(<Card key={num} id={num} index={i} src={pokeUrl} check={ifClickedOn}/>)
    };
    return <div className='poke'>
      {pokeArray}
    </div>
  }

  // stop render when level is over
  const handleRender = () => {
    if (renderCards === 0) {
      return makePokeCards()
    }
  }

  return (
    <div className='game'>
        <Scoreboard current={currentScore} highScore={highScore} level={level}/>
        {handleRender()}
    </div>
  );
}

export default Game;