import React, { Component } from 'react';
import { connect } from 'react-redux';

class SeriesDisplay extends Component {
  render() {
    if (this.props.collapsed) {
      return null
    } else if (!this.props.collapsed && this.props.isFetching) {
      return <p>Loading...</p>
    } else if (!this.props.collapsed && !this.props.isFetching) {
      return (
        <>
          <p>Comic series featuring {this.props.superhero}.</p>
          <ul className="list-unstyled">
            {this.props.response.data.results.map((result, index) => {
              return (
                <div className="media mb-3" key={index}>
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

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name,
    collapsed: state.series.collapsed,
    isFetching: state.series.isFetching,
    response: state.series.response
  }
}

export default connect(mapStateToProps)(SeriesDisplay)
