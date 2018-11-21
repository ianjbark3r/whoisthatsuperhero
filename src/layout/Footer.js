import React, { Component } from 'react';
import styled from 'styled-components';

const EndCap = styled.div`
  text-align: right;
  background-color: black;
  bottom: 0;
  padding: 0.5rem 1rem;
  position: fixed;
  a {
    color: white;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <EndCap>
        <div><a href="http://ianjbarker.com">Created by Ian J Barker</a></div>
      </EndCap>
    )
  }
}
