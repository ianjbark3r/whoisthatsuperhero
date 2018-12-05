import React, { Component } from 'react';
import styled from 'styled-components';

import EventsDisplay from '../components/EventsDisplay';

const DisplayArea = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #EEEEEE;
  h1 {
    font-family: 'Oswald', sans-serif;
    a {
      color: black;
    }
  }
`

export default class Events extends Component {
  render() {
    return (
      <DisplayArea>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-end">
            <div className="col-lg-10 col-md-12">
              <EventsDisplay />
            </div>
          </div>
        </div>
      </DisplayArea>
    )
  }
}
