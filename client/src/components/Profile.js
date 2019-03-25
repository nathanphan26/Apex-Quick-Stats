import React from 'react';

const Profile = ({ character }) => {


  const champions = character && character !== "" ? character.champions.map((item, key) => {
    return <li>
      Legend: {item.legend}
      <ul>
        {item.stats.map((item, key) => {
          return <li>{item.statName}: {item.statValue}</li>
        })}
      </ul>
    </li>
  }) : '';

  console.log(character);

  return (
    <div>
    {
        character && character !== "" ? 
        (
          <div>
            <h3>Username: {character.username}</h3>
            <p>Level: {character.level}</p>
            <p>Total Kills: {character.totalKills}</p>
            <ul>
              {champions}
            </ul>
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