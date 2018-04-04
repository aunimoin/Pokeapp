import React from "react";
// import PokeListItem from './PokeList-Item'

const Profile = props => {
  const { name, weight, abilities, sprites } = props.urlList;
  return (
    <div className="profile-container">
      <h1>Poke Profile</h1>
      <img src={sprites.front_default} alt="poke-images" />
      <div className="profile">
        Name: <span>{name}</span>
      </div>
      <div className="poke-weight">
        Weight: <span>{weight}</span>
      </div>
      <div className="poke-abilities">
        Abilities:{" "}
        {abilities.map(ability => {
          return <div key={ability.ability.name}>{ability.ability.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Profile;
