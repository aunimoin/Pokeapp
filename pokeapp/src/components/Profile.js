import React from "react";
// import PokeListItem from './PokeList-Item'

// Profile is a functional component since it's outputing html
const Profile = props => {
  const { name, weight, abilities, sprites } = props.poke;
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
        {abilities.map((ability, index) => {
          return <div key={index}>{ability.ability.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Profile;
