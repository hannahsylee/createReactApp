import React from 'react';
import Pokedex from "./Pokedex";

function Pokegame(props) {
    // randomly assign them into two hands of 4 cards each. 
    let hand1 = [];
    let hand2 = [...props.pokemon];

    while (hand1.length < hand2.length){
        let idx = Math.floor(Math.random() * hand2.length);
        // for ex: idx = 2
        // hand2 = [Charmander, Squirtle, Metapod, Buttrfree, Pikachu, Jigglypuff, Gengar, Eevee]
        // randomPokemon = Metapod
        // hand1 = [Metapod]
        // hand2 = [Charmander, Squirtle, Buttrfree, Pikachu, Jigglypuff, Gengar, Eevee]
        let randomPokemon = hand2[idx];
        hand1.push(randomPokemon);
        hand2.splice(idx, 1);
    };

    // calculates the total experience for each hand of pokemon
    const initialValue = 0;
    let hand1Total = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, initialValue);
    let hand2Total = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, initialValue);

    // It should then render two Pokedex components, one for each hand.
    return (
        <div>
          <Pokedex pokemon={hand1} exp={hand1Total} isWinner={hand1Total > hand2Total} />
          <Pokedex pokemon={hand2} exp={hand2Total} isWinner={hand2Total > hand1Total} />
        </div>
    );
}

Pokegame.defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
};

export default Pokegame;