import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import Spinner   from '../spinner/spinner';

import './random-planet.scss';


export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {}
  };
  

  constructor() {
    super();
    this.updatePlanet();
    
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
    console.log(planet);
  };


  updatePlanet() {
    const id = Math.floor(Math.random() * (15 - 2) + 2);
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded);
  }

  render() {

    const { planet: { id, name, population,
      rotationPeriod, diameter } } = this.state;
      


    return (
      <div className="random-planet jumbotron rounded justify-content-center ">

      <Spinner /> 

      </div>

    )

  }
}
