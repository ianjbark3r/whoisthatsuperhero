import React, { Component } from 'react';
import EventsDisplay from '../components/EventsDisplay';

export default class Events extends Component {
  render() {
    return (
      <>
        <h2><a href="/">Events</a></h2>
        <EventsDisplay />
      </>
    )
  }
}
