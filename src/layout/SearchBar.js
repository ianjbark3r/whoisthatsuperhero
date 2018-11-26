import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'reactstrap';
import SupeheroDisplay from './SuperheroDisplay'

const endpoint = "https://gateway.marvel.com:443/v1/public/characters"
const apikey = "9d919d14053c4677a44d43af4024d3d1"

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

const DisplayArea = styled.div`

`

const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
`

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      superhero: '',
      submitted: false,
      heroInfo: {
        attributionText: '',
        data: {
          results: [
            {
              name: '',
              description: '',
              thumbnail: {
                path: '',
                extension: ''
              },
              comics: {
                items: [
                  {
                    name: ''
                  }
                ]
              },
              series: {
                items: [
                  {
                    name: ''
                  }
                ]
              },
              events: {
                items: [
                  {
                    name: ''
                  }
                ]
              },
              urls: [
                {
                  type: '',
                  url: ''
                }
              ]
            }
          ]
        }
      }
    }
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      superhero: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.superhero) {
      const name = this.state.superhero

      fetch(`${endpoint}?nameStartsWith=${name}&limit=1&apikey=${apikey}`)
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
        this.setState({
          submitted: true,
          heroInfo: jsonData
        })
      })
      .catch(err => {
        console.log(err)
      })

      console.log(this.state.heroInfo);
    }
  }

  render() {
    return (
      <div>
        <SearchArea>
          <Title>Who is that Marvel superhero?</Title>
          <div className="d-flex justify-content-center">
            <Form className="d-flex justify-content-center" onSubmit={this.handleSubmit.bind(this)}>
              <Input  type="text" name="search"  placeholder="Thor, Iron Man, etc." onChange={this.handleChange.bind(this)}></Input>
              <Button type="submit" className="btn btn-light ml-2">Search</Button>
            </Form>
          </div>
        </SearchArea>
        <SupeheroDisplay heroInfo={this.state.heroInfo} submitted={this.state.submitted} />
      </div>
    )
  }
}
