import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventsDisplay extends Component {
  render() {
    if (this.props.collapsed) {
      return null
    } else if (!this.props.collapsed && this.props.isFetching) {
      return <p>Loading...</p>
    } else if (!this.props.collapsed && !this.props.isFetching) {
      return (
        <>
          <p>Events in which {this.props.superhero} played a role.</p>
          <ul className="list-unstyled">
            {this.props.response.data.results.map((result, index) => {
              return (
                <div className="media mb-3" key={index}>
                  <img className="mr-3" src={`${result.thumbnail.path}/portrait_medium.${result.thumbnail.extension}`} alt={`${result.title} thumbnail`} />
                  <div className="media-body" key={index}>
                    <h5><a href={result.urls[0].url} target="_blank" rel="noopener noreferrer">{result.title}</a></h5>
                    {result.description}
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
    collapsed: state.events.collapsed,
    isFetching: state.events.isFetching,
    response: state.events.response
  }
}

export default connect(mapStateToProps)(EventsDisplay)
