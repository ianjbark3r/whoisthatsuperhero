import React from 'react';
import axios from 'axios';
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
          axios.get(`https://gateway.marvel.com:443/v1/public/characters/${props.id}/events?limit=9&apikey=9d919d14053c4677a44d43af4024d3d1`)
            .then((response) => {
              dispatch(receiveEvents(response))
            })
        })
      }}>Events<img className="ml-3" style={{ width: "1.5rem", transform: "rotate(270deg)" }} src="https://img.icons8.com/metro/50/000000/expand-arrow.png" alt="arrow" /></a></h1>
    )
  } else if (!props.collapsed && props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/">Events<img className="ml-3" style={{ width: "1.5rem" }} src="https://img.icons8.com/metro/50/000000/expand-arrow.png" alt="arrow" /></a></h1>
        <p>Loading...</p>
      </>
    )
  } else if (!props.collapsed && !props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/" onClick={(e) => {
          e.preventDefault();
          props.dispatch(toggleEvents(!props.collapsed))
        }}>Events<img className="ml-3" style={{ width: "1.5rem" }} src="https://img.icons8.com/metro/50/000000/expand-arrow.png" alt="arrow" /></a></h1>
        <hr />
        <p style={{ fontSize: "1.3rem", fontStyle: "italic" }}>Events in which {props.superhero} played a role.</p>
        <ul className="list-unstyled">
          {props.response.data.results.map((result, index) => {
            return (
              <div className="media mb-3" key={index}>
                <img className="mr-3" src={`${result.thumbnail.path}/portrait_medium.${result.thumbnail.extension}`} alt={`${result.title} thumbnail`} />
                <div className="media-body" key={index}>
                  <h4><a href={result.urls[0].url} target="_blank" rel="noopener noreferrer">{result.title}</a></h4>
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
    superhero: state.heroInfo.response.data.results[0].name,
    id: state.heroInfo.response.data.results[0].id,
    collapsed: state.ui.eventsCollapsed,
    isFetching: state.events.isFetching,
    response: state.events.response
  }
}

export default connect(mapStateToProps)(EventsDisplay)
