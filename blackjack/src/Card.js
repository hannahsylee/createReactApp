import React from 'react';
import './Card.css';

const CARD_API = 'https://deckofcardsapi.com/';

function Card(props){
    let imgSrc = `${CARD_API}/static/img/${props.id}.png`;
    return (
        <img className='Card' 
        src={imgSrc} 
        alt={`${props.id} playing card`}
        />
    );
}

export default Card;