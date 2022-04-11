import React from 'react';

// score for one card
function getScore(card) {
    // ex: 9H -> 9 is card[0]
    const val = card[0];
    if (val === 'A') return 11;
    if (['0', 'J', 'Q', 'K'].includes(val)) return 10;
    return +val;
};

// combine score for each card
function totalScore(cards){
    let score = 0;
    for (let card of cards){
        score += getScore(card);
    }
    return score;
}

function Score(props){
    const score = totalScore(props.cards);
    return (
        <div className='Score'>
            <h2>Score: {score}</h2>
            {score === 21 ? <h4>🎉🎉🎉 BLACKJACK!!! 🎉🎉🎉</h4> : null}
        </div>
    );
}

export default Score;