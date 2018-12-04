import React, { Component } from 'react';
import styled from 'styled-components';
import SearchField from '../components/SearchField'

const SearchArea = styled.div`
  background-color: #F0131E;
  color: white;
  padding-top: 10vh;
  padding-bottom: 10vh;
  h1 {
    text-align: center;
    padding-bottom: 5vh;
  }
`

const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
`

export default class Search extends Component {
  render() {
    return (
      <SearchArea>
        <Title>Who is that Marvel superhero?</Title>
        <SearchField />
      </SearchArea>
    )
  }
}
