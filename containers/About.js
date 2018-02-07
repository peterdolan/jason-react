import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        About
        <Link to='/'>
          <button>Go Home</button>
        </Link>
      </div>
    );
  }
}
