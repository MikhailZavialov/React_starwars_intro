import React, { Component } from 'react';
import './error-indicator.scss';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="img not found" />
      <span className="boom"> BOOM! </span>
      <span className="errDiscr"> something has gone terribly wrong</span>
      <span className="errDiscr"> (but we already sent droids to fix it) </span>
    </div>
  );
};

export default ErrorIndicator;
