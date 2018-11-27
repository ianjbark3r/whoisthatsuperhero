import React from 'react';

export default class Events extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
      events: ''
    }
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed
    })

    console.log(this.state.collapsed)

    if (!this.state.events) {
      const endpoint = this.props.endpoint;
      const id = this.props.id;
      const apikey = this.props.apikey;

      fetch(`${endpoint}/${id}/events?limit=9&apikey=${apikey}`)
        .then(res => {
          return res.json()
        })
        .then(jsonData => {
          this.setState({
            events: jsonData
          })
        })
        .catch(err => {
          console.log(err)
        }
      )

      console.log(this.state.series);
    }
  }

  render() {
    if (this.state.collapsed) {
      return (
        <>
          <h2>Events</h2>
          <button onClick={this.handleClick}>Close</button>
        </>
      )
    } else {
    return (
      <>
        <h2>Events</h2>
        <button onClick={this.handleClick}>Close</button>
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
    )}
  }
}
