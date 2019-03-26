import React, { Component } from 'react';
import axios from 'axios';
import { Input, Button, InputGroup } from 'reactstrap';

import Profile from './Profile';


class Search extends Component {

  state = {
    username: "",
    character: ""
  }

  searchUsername = () => {
    const username = this.state.username;

    if(username && username.length > 0){
      const params = {
        username: username
      }
      axios.post(`/api`, params)
        .then(res => {
          if(res.data){
            // console.log(res.data);
            this.setState({
                character: res.data.data
            });
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('Username required')
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    let { username } = this.state.username;

    return (
      <div className="container">
        <InputGroup className="mt-2">
            <Input type="text" onChange={this.handleChange} value={username} /> 
            <Button color="primary" onClick={this.searchUsername}>Search</Button>
        </InputGroup>
        <div className="container">
          <Profile character={this.state.character} />
        </div>
      </div>
    )
  }
}

export default Search;
