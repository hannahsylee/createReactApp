import React from 'react';
import Cards from "./Cards";
import Score from "./Score";
import './Blackjack.css';

function choice(items) { 
    // returns a randomly selected item from array of items
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
};

function getCard(values, suits) {
    // removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
    const value = choice(values);
    const suit = choice(suits);
    return value + suit;
}

function getCards(values, suits, numCards = 1) {
    const cardsArr = [getCard(values, suits)];
    while (cardsArr.length < numCards) {
      let randomCard = getCard(values, suits);
      if (!cardsArr.includes(randomCard)) cardsArr.push(randomCard);
    }
    return cardsArr;
}

function Blackjack(props) {
    // deals you two cards from a 52-card deck
    let cardPair = getCards(props.values, props.suits, 2);

    return (
        <div className='Blackjack'>
          <Cards cards={cardPair} />
          <Score cards={cardPair} />
        </div>
    );
}

Blackjack.defaultProps = {
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"],
    suits: ["C", "D", "H", "S"]
};

export default Blackjack;