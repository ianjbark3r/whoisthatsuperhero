import React from 'react';

export default class Events extends React.Component {
  render() {
    return (
      <>
        <h2>Events</h2>
        <p>Here is a list of events in which {this.props.name} has been involved.</p>
        <ul>
          {this.props.events.items.map((event, index) => {
            return (
              <li key={index}>{event.name}</li>
            )
          })}
        </ul>
        <hr />
      </>
    )
  }
}
