import React from "react";
// import PokeListItem from './PokeList-Item'

const List = props => {
  return (
    <div className="list-container">
      <h1>Pokemon</h1>
      <div className="list">
        {props.pokeList.map(pokemon => {
          return (
            <p key={pokemon.name} onClick={() => props.getUrl(pokemon.url)}>
              {/* use method created in App.js
              the key is used to make each name unique */}
              {pokemon.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default List;
