import React, { Component } from 'react';
import loading from './loading.gif'

export class Load extends Component {
  render() {
    return (
      <div className='align-middle text-center'>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Load;
