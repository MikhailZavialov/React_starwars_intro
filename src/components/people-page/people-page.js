import React, { Component } from 'react';
import './people-page.scss';
import ItemList from '../item-list/index';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
// import ErrorButton from '../error-button/index';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }


  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>

    );
  }
}
