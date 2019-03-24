import React, { Component } from 'react';
import axios from 'axios';

import Profile from './Profile';


class Input extends Component {

  state = {
    username: "",
    character: ""
  }

  searchUsername = () => {
    const username = this.state.username;

    if(username && username.length > 0){
      axios.get(`/api/search/${username}`)
        .then(res => {
          if(res.data){
            this.setState({
                character: res.data
            });
            // console.log(this.state.character.data.metadata.platformUserHandle);
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
    let { character } = this.state.character;
    // console.log(this.state.username);
    return (
      <div>
        <div>
            <input type="text" onChange={this.handleChange} value={username} />
            <button onClick={this.searchUsername}>Search</button>
        </div>
        <Profile character={this.state.character} />
      </div>
    )
  }
}

export default Input