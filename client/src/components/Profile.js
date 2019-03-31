import React from 'react';
import { Jumbotron, Card, CardDeck, CardHeader, CardBody, CardText, CardImg, Col, Row} from 'reactstrap';

import '../App.css';

const Profile = ({ character }) => {
  
  const legends = character && character !== "" ? character.champions.map((item, key) => {
    const image = item.image;
    const stats = item.stats.map((stat, key) => {
      return <li>{stat.statName}: {stat.statValue}</li>
    });
    return  <Col xs="4">
            <Card className="Card">
            <div className="CardImgContainer">
              <CardImg className="CardImg" top src={image} alt="Card image cap" />
            </div>
            <CardHeader>{item.legend}</CardHeader>
            <CardBody>
              <CardText>
                <ul>
                  {stats}
                </ul>
              </CardText>
            </CardBody>
          </Card>
          </Col>
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
            
            <Row className="justify-content-around mb-5">
              { legends }
            </Row>
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
