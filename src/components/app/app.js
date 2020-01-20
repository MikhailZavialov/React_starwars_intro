import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';
import './app.scss';
import ErrorIndicator from '../error-indicator/error-indicator';
// import ErrorButton from '../error-button';


export default class App extends Component {
  state = { hasError: false };


  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
