import React, { Component } from 'react';
import styled from 'styled-components';

const EndCap = styled.div`
  text-align: right;
  background-color: black;
  bottom: 0;
  color: white;
  padding: 1rem;
  position: fixed;
  width: 100%;
`

export default class Footer extends Component {
  render() {
    return (
      <EndCap>
        <div>Created by Ian J Barker</div>
        <div><a href="http://ianjbarker.com">ianjbarker.com</a></div>
      </EndCap>
    )
  }
}
