import React, { Fragment } from 'react';
import { Jumbotron, Card, CardDeck, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap';

const Profile = ({ character }) => {
  
  const legends = character && character !== "" ? character.champions.map((item, key) => {
    const stats = item.stats.map((stat, key) => {
      return <li>{stat.statName}: {stat.statValue}</li>
    });
    return <Card>
            <CardHeader>{item.legend}</CardHeader>
            <CardBody>
              <CardText>
                <ul>
                  {stats}
                </ul>
              </CardText>
            </CardBody>
          </Card>
  }) : '';

  return (
    <div>
    {
        character && character !== "" ? 
        (

          <div className="container mt-3">
            <Jumbotron>
              <h1 className="display-3">{character.username}</h1>
              <h4>Level {character.level}</h4>
              <h4>Total Kills: {character.totalKills}</h4>
            </Jumbotron>
            
            <CardDeck>
              { legends }
            </CardDeck>
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

export default Profile;
