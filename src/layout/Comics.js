import React, { Component } from 'react';
import styled from 'styled-components';

import ComicsDisplay from '../components/ComicsDisplay';

const DisplayArea = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #EEEEEE;
  color: black;
  h1 {
    font-family: 'Oswald', sans-serif;
    a {
      color: black;
    }
  }
`

export default class Comics extends Component {
  render() {
    return (
      <DisplayArea>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-end">
            <div className="col-md-12 col-lg-10">
              <ComicsDisplay />
            </div>
          </div>
        </div>
      </DisplayArea>
    )
  }
}
