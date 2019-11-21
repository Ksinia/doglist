import React, { Component } from "react";
import DogsList from "./DogsList";

export default class DogsListContainer extends Component {
  state = { dogBreeds: null };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(response => {
        const breeds = Object.keys(response.message);
        this.updateBreeds(breeds);
      })
      .catch(console.error);
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    });
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />;
  }
}
