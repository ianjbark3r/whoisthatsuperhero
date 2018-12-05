import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setSuperhero } from '../actions/setSuperhero';
import { requestHeroInfo } from '../actions/requestHeroInfo';
import { receiveHeroInfo } from '../actions/receiveHeroInfo';
import { resetUi } from '../actions/resetUi';

const SearchField = (props) => (
  <div className="d-flex justify-content-center">
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();

      props.dispatch(resetUi());
      props.dispatch((dispatch) => {
        dispatch(requestHeroInfo())
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${props.superhero}&apikey=9d919d14053c4677a44d43af4024d3d1`)
          .then((response) => {
            dispatch(receiveHeroInfo(response))
          })
      });
    }}>
      <div className="form-group mb-0">
        <input
          type="text"
          name="superhero"
          className="form-control"
          placeholder="Thor, Iron Man, etc."
          onChange={(e) => {
            props.dispatch(setSuperhero(e.target.value));
          }}></input>
      </div>
      <button type="submit" className="btn btn-light ml-2">Search</button>
    </form>
  </div>
)

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name
  }
}

export default connect(mapStateToProps)(SearchField);
