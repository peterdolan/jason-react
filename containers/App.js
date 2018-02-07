import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import InputPreview from '../components/InputPreview';
import { setMessage } from '../actions/message';

class App extends Component {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.dispatch(setMessage(value));
  }

  render () {
    const { message } = this.props.messageReducer;
    return (
      <div>
        <InputPreview onChange={ this.onChange } value={ message } />
        <Link to='/about'>
          <button>Go to About</button>
        </Link>
      </div>
    );
  }
}

export default connect(state => state)(App);
