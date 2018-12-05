import React, { Component } from 'react';
import SeriesDisplay from '../components/SeriesDisplay';
import styled from 'styled-components';

const DisplayArea = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  color: black;
  h1 {
    font-family: 'Oswald', sans-serif;
    a {
      color: black;
    }
  }
`

export default class Series extends Component {
  render() {
    return (
      <DisplayArea>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-end">
            <div className="col-md-12 col-lg-10">
              <SeriesDisplay />
            </div>
          </div>
        </div>
      </DisplayArea>
    )
  }
}
