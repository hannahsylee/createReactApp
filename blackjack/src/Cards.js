import React from "react";
import Card from "./Card";

function Cards(props) {
    const cards = props.cards.map(id => (
        <Card id={id} key={id} />
    ));
    return <div>{cards}</div>
}

export default Cards;