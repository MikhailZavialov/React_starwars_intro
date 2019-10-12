import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import './random-planet.scss';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
      error: false,
    });
    console.log(planet);
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * (15 - 2) + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    const styleSpin = loading ? 'justify-content-center' : null;
    return (
      <div className={`random-planet jumbotron rounded ${styleSpin}`}>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <img
        className="planet-image"
        alt="Something_wrong"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <span className="d-flex justify-content-around">
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
    </>
  );
};
