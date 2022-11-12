import React, { useState } from 'react';

function RandomCard() {

  const randomNumber = () => {
    return parseInt(Math.floor(Math.random() * 601));
  }

  const level = () => {
    const randomNum = randomNumber();
    const cardsArray = [];
    for (let i = 0; i < 5; i++) {
        const num = randomNum + i;
        const pokeUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + num + '.png';
        cardsArray.push({id: num, src: pokeUrl});
    };
    return cardsArray
  }



  return level()
}

export default RandomCard;