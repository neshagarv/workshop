import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './form.css';

class Orderform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      gameTitle: '',
      publisher: '',
      price: '',
      platform: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGameIdChange = (event) => {
    this.setState({ gameId: event.target.value });
  }
  handleGameTitleChange = (event) => {
    this  .setState({ gameTitle: event.target.value });
  }
  handlePublisherChange = (event) => {
    this.setState({ publisher: event.target.value });
  }
  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  }
  handlePlatformChange = (event) => {
    this.setState({ platform: event.target.value });
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const gameData = {
    //   gameId: this.state.gameId,
      title: this.state.gameTitle,
      publisher: this.state.publisher,
      price: this.state.price,
      platform: this.state.platform
    };
    console.log(gameData)
    axios.post('http://localhost:8080/save', gameData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      window.location.reload();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Game Store</h2>
        <input
          placeholder='Game ID'
          type="text"
          name="gameId"
          value={this.state.gameId}
          onChange={this.handleChange}
        />
        <input
          placeholder='Game Title'
          type="text"
          name="gameTitle"
          value={this.state.gameTitle}
          onChange={this.handleChange}
        />
        <input
          placeholder='Publisher'
          type="text"
          name="publisher"
          value={this.state.publisher}
          onChange={this.handleChange}
        />
        <input
          placeholder='Price'
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <input
          placeholder='Platform'
          type="text"
          name="platform"
          value={this.state.platform}
          onChange={this.handleChange}
        />
        <button>Submit</button>
        <Link to="/table">view table</Link>
      </form>
    );
  }
}

export default Orderform;
