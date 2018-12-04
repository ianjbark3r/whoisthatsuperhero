import React, { Component } from 'react';
import ComicsDisplay from '../components/ComicsDisplay';

export default class Comics extends Component {
  render() {
    return (
      <>
        <h2><a href="/">Comics</a></h2>
        <ComicsDisplay />
      </>
    )
  }
}
