import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { toggleComics } from '../actions/toggleComics';
import { requestComics } from '../actions/requestComics';
import { receiveComics } from '../actions/receiveComics';

const ComicsDisplay = (props) => {
  if (props.collapsed) {
    return (
      <h1 className="display-4"><a href="/" onClick={(e) => {
        e.preventDefault();

        props.dispatch(toggleComics(!props.collapsed))
        props.dispatch((dispatch) => {
          dispatch(requestComics())
          axios.get(`https://gateway.marvel.com:443/v1/public/characters/${props.id}/comics?limit=9&apikey=9d919d14053c4677a44d43af4024d3d1`)
            .then((response) => {
              dispatch(receiveComics(response))
            })
        })
      }}>Comics<img className="ml-3" style={{ width: "1.5rem", transform: "rotate(270deg)" }} src="https://img.icons8.com/metro/50/000000/expand-arrow.png" alt="arrow" /></a></h1>
    )
  } else if (!props.collapsed && props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/">Comics<img className="ml-3" style={{ width: "1.5rem" }} src="https://img.icons8.com/metro/50/000000/expand-arrow.png" alt="arrow" /></a></h1>
        <p>Loading...</p>
      </>
    )
  } else if (!props.collapsed && !props.isFetching) {
    return (
      <>
        <h1 className="display-4"><a href="/" onClick={(e) => {
          e.preventDefault();
          props.dispatch(toggleComics(!props.collapsed))
        }}>Comics<img className="ml-3" style={{ width: "1.5rem" }} src="https://img.icons8.com/metro/50/000000/expand-arrow.png" alt="arrow" /></a></h1>
        <hr />
        <p style={{ fontSize: "1.3rem", fontStyle: "italic" }}>A sampling of comics in which {props.superhero} makes an appearance.</p>
        <div className="card-columns">
          {props.response.data.results.map((result, index) => {
              return (
                <div className="card" key={index}>
                  <a href={result.urls[0].url} target="_blank" rel="noopener noreferrer"><img className="card-img-top" width="100%" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt={result.title} /></a>
                  <div className="card-body" key={index}>
                    <h4 className="card-title"><a href={result.urls[0].url} target="_blank" rel="noopener noreferrer">{result.title}</a></h4>
                    <p className="card-text"><strong>Price:</strong> ${result.prices[0].price}</p>
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
    superhero: state.heroInfo.response.data.results[0].name,
    id: state.heroInfo.response.data.results[0].id,
    collapsed: state.ui.comicsCollapsed,
    isFetching: state.comics.isFetching,
    response: state.comics.response
  }
}

export default connect(mapStateToProps)(ComicsDisplay)
