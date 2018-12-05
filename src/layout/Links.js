import React, { Component } from 'react';
import styled from 'styled-components';

import LinksDisplay from '../components/LinksDisplay'

const DisplayArea = styled.div`
  padding-top: 2vh;
  margin-bottom: 15vh;
  h1 {
    font-family: 'Oswald', sans-serif;
  }
`

export default class Links extends Component {
  render() {
    return (
      <DisplayArea>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-end">
            <div className="col-lg-10 col-md-12">
              <LinksDisplay />
            </div>
          </div>
        </div>
      </DisplayArea>
    )
  }
}
