import React from "react";
// import PokeListItem from './PokeList-Item'
// List is a functional component since it's outputing html
const List = props => {
  // console.log("LIST PROPS", props);
  return (
    <div className="list-container">
      <h1>Pokemon</h1>
      <div className="list">
        {props.pokeList.map((pokemon, index) => {
          return (
            <p key={index} onClick={() => props.getUrl(pokemon.url)}>
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
