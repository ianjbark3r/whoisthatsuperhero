import React, { Component } from 'react';

export default class SuperheroDisplay extends Component {
  render() {
    if (!this.props.submitted) {
      return <div></div>
    }
    return (
      <div>{console.log(this.props.heroInfo)}</div>
    )
  }
}
