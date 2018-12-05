import React, { Component } from 'react';
import styled from 'styled-components'

import HeroImgDisplay from '../components/HeroImgDisplay';
import HeroDetailsDisplay from '../components/HeroDetailsDisplay';

const DisplayArea = styled.div`
  padding-top: 4vh;
  padding-bottom: 2vh;
  h1 {
    font-family: 'Oswald', sans-serif;
    a {
      color: black;
    }
  }
`

export default class HeroInfo extends Component {
  render() {
    return (
      <DisplayArea>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-6">
              <HeroImgDisplay />
            </div>
            <div className="col-lg-5 col-md-6">
              <HeroDetailsDisplay />
            </div>
          </div>
        </div>
      </DisplayArea>
    )
  }
}
