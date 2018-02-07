import React, { Component } from 'react';

export default class InputPreview extends Component {
  render() {
    return (
      <div>
        <input
          onChange={ e => this.props.onChange(e.target.value) }
          type='text'
          value={ this.props.value }/>
      </div>
    ); 
  }
}
