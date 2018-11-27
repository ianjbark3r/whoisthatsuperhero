import React from 'react';

export default class Series extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
      series: ''
    }
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed
    })

    console.log(this.state.collapsed)

    if (!this.state.series) {
      const endpoint = this.props.endpoint;
      const id = this.props.id;
      const apikey = this.props.apikey;

      fetch(`${endpoint}/${id}/series?limit=9&apikey=${apikey}`)
        .then(res => {
          return res.json()
        })
        .then(jsonData => {
          this.setState({
            series: jsonData
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
          <h2>Series</h2>
          <button onClick={this.handleClick}>View</button>
        </>
      )
    } else {
    return (
      <>
        <h2>Series</h2>
        <button onClick={this.handleClick}>Close</button>
        <p>Here is a list of comic series in which {this.props.name} makes an appearance.</p>
        <ul>
          {this.props.series.items.map((seriesEntry, index) => {
            return (
              <li key={index}>{seriesEntry.name}</li>
            )
          })}
        </ul>
        <hr />
      </>
    )}
  }
}
