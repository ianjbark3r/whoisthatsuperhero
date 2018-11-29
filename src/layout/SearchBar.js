import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'reactstrap';
import SupeheroDisplay from './SuperheroDisplay'

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

export default class SearchBar extends Component {
  render() {
    return (
      <SearchArea>
        <Title>Who is that Marvel superhero?</Title>
        <div className="d-flex justify-content-center">
          <Form className="d-flex justify-content-center" onSubmit={this.props.handleSubmit}>
            <Input  type="text" name="superhero"  placeholder="Thor, Iron Man, etc."></Input>
            <Button type="submit" className="btn btn-light ml-2">Search</Button>
          </Form>
        </div>
      </SearchArea>
    )
  }
}
