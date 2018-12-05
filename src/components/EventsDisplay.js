import React from 'react';
import { connect } from 'react-redux';

import { toggleEvents } from '../actions/toggleEvents';
import { requestEvents } from '../actions/requestEvents';
import { receiveEvents } from '../actions/receiveEvents';

const EventsDisplay = (props) => {
  if (props.collapsed) {
    return (
      <h1 className="display-4"><a href="/" onClick={(e) => {
        e.preventDefault();

        props.dispatch(toggleEvents(!props.collapsed))
        props.dispatch((dispatch) => {
          dispatch(requestEvents())
          dispatch(receiveEvents())
        })
      }}>Events</a></h1>
    )
  } else if (!props.collapsed && props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/" onClick={(e) => {
          e.preventDefault();
          props.dispatch(toggleEvents(!props.collapsed))
        }}>Events</a></h1>
        <p>Loading...</p>
      </>
    )
  } else if (!props.collapsed && !props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/" onClick={(e) => {
          e.preventDefault();
          props.dispatch(toggleEvents(!props.collapsed))
        }}>Events</a></h1>
        <hr />
        <p style={{ fontSize: "1.3rem", fontStyle: "italic" }}>Events in which {props.superhero} played a role.</p>
        <ul className="list-unstyled">
          {props.response.data.results.map((result, index) => {
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
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name,
    collapsed: state.ui.eventsCollapsed,
    isFetching: state.events.isFetching,
    response: state.events.response
  }
}

export default connect(mapStateToProps)(EventsDisplay)
