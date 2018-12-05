import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { toggleSeries } from '../actions/toggleSeries';
import { requestSeries } from '../actions/requestSeries';
import { receiveSeries } from '../actions/receiveSeries';

const SeriesDisplay = (props) => {
  if (props.collapsed) {
    return (
      <h1 className="display-4"><a href="/" onClick={(e) => {
        e.preventDefault();

        props.dispatch(toggleSeries(!props.collapsed))
        props.dispatch((dispatch) => {
          dispatch(requestSeries())
          axios.get(`https://gateway.marvel.com:443/v1/public/characters/${props.id}/series?limit=9&apikey=9d919d14053c4677a44d43af4024d3d1`)
            .then((response) => {
              dispatch(receiveSeries(response))
            })
        })
      }}>Series</a></h1>
  )
  } else if (!props.collapsed && props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/" onClick={(e) => {
          e.preventDefault();
          props.dispatch(toggleSeries(!props.collapsed))
        }}>Series</a></h1>
        <p>Loading...</p>
      </>
    )
  } else if (!props.collapsed && !props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/" onClick={(e) => {
          e.preventDefault();
          props.dispatch(toggleSeries(!props.collapsed))
        }}>Series</a></h1>
        <hr />
        <p style={{ fontSize: "1.3rem", fontStyle: "italic" }}>Comic book series featuring {props.superhero}.</p>
        <div className="card-columns">
          {props.response.data.results.map((result, index) => {
            return (
              <div className="card" key={index}>
                <a href={result.urls[0].url} target="_blank" rel="noopener noreferrer"><img className="card-img-top" src={`${result.thumbnail.path}/portrait_medium.${result.thumbnail.extension}`} alt={`${result.title} thumbnail`} /></a>
                <div className="card-body" key={index}>
                  <h4 className="card-title"><a href={result.urls[0].url} target="_blank" rel="noopener noreferrer">{result.title}</a></h4>
                  {result.description}
                </div>
              </div>
              )
            })}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name,
    id: state.heroInfo.response.data.results[0].id,
    collapsed: state.ui.seriesCollapsed,
    isFetching: state.series.isFetching,
    response: state.series.response
  }
}

export default connect(mapStateToProps)(SeriesDisplay)
