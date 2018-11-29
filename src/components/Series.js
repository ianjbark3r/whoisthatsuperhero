import React from 'react';

export default class Series extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
      prevSuperhero: '',
      series: {}
    }
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  static getDerivedStateFromProps() {
    if (this.props.superhero !== this.state.prevSuperhero) {
      fetch(`${this.props.endpoint}/${this.props.id}/series?limit=6&apikey=${this.props.apikey}`)
        .then(res => res.json())
        .then(jsonData => {
          return {
            prevSuperhero: this.props.superhero,
            series: jsonData
          }
        }).catch(err => console.err('Error:', err));
    }
    return null;
  }

  render() {
    if (this.state.collapsed) {
      return (
        <>
          <h2><a href="/" onClick={this.handleClick}>Series</a></h2>
          <hr />
        </>
      )
    } else {
      return (
        <>
          <h2><a href="/" onClick={this.handleClick}>Series</a></h2>
          <p>Comic series featuring {this.props.superhero}.</p>
          <ul className="list-unstyled">
            {this.state.series.data.results.map((result, index) => {
              return (
                <div class="media mb-3" key={index}>
                  <img className="mr-3" src={`${result.thumbnail.path}/portrait_medium.${result.thumbnail.extension}`} alt={`${result.title} thumbnail`} />
                  <div className="media-body" key={index}>
                    <h5><a href={result.urls[0].url} target="_blank" rel="noopener noreferrer">{result.title}</a></h5>
                  </div>
                </div>
                )
              })}
          </ul>
          <hr />
        </>
      )
    }
  }
}
