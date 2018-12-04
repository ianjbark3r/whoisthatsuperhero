import React, { Component } from 'react';
import SeriesDisplay from '../components/SeriesDisplay';

export default class Series extends Component {
  render() {
    return (
      <>
        <h2><a href="/">Series</a></h2>
        <SeriesDisplay />
      </>
    )
  }
}
