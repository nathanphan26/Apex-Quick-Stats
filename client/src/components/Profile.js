import React from 'react';
import { Jumbotron, Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap';

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
  
  const legends = character.champions.map((item, key) => {
    const stats = item.stats.map((stat, key) => {
      return <li>{stat.statName}: {stat.statValue}</li>
    });
    return <Card>
            <CardHeader>{item.legend}</CardHeader>
            <CardBody>
              <CardTitle>Stats</CardTitle>
              <CardText>
                <ul>
                  {stats}
                </ul>
              </CardText>
            </CardBody>
          </Card>
  });

  console.log(character);

  return (
    <div>
    {
        character && character !== "" ? 
        (
          {/*
          <div>
            <h3>Username: {character.username}</h3>
            <p>Level: {character.level}</p>
            <p>Total Kills: {character.totalKills}</p>
            <ul>
              {champions}
            </ul>
          </div>
          */}
          
          <Jumbotron>
            <h1 className="display-3">{character.username}</h1>
            <h4>Level {character.level}</h4>
            <h4>Total Kills: {character.totalKills}</h4>
          </Jumbotron>
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
