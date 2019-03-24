import React from 'react';

const Profile = ({ character }) => {

    console.log(character);

  return (
    <div>
    {
        character && character !== "" ? 
        (
          <div>
            <h3>Username: {character.username}</h3>
            <p>Level: {character.level}</p>
            <p>Total Kills: {character.total_kills}</p>
            <h4>Legend 1: {character.character1}</h4>
            <p>Stats: {character.stat1}</p>
          </div>
        )
        :
        (
            <p>No user</p>
        )
    }
    </div>
  )
}

export default Profile