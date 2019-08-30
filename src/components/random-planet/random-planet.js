import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

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
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" alt = 'Something_wrong'
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />

        <div>
          <span className = 'd-flex justify-content-around'>
          <h5>{id}</h5>
          <h4>{name}</h4> 
          </span>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
