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
      heroInfo: {},
      comics: {},
      events: {},
      series: {}
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
    }
  }

  // componentDidUpdate() {
  //   console.log(this.state.heroInfo)
  //
  //   fetch(`${endpoint}/${this.state.heroInfo.data.results[0].id}/comics?limit=9&apikey=${apikey}`)
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(jsonData => {
  //       console.log(jsonData);
  //
  //       this.setState({
  //         comics: jsonData
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //
  //     fetch(`${endpoint}/${this.state.heroInfo.data.results[0].id}/events?limit=9&apikey=${apikey}`)
  //       .then(res => {
  //         return res.json()
  //       })
  //       .then(jsonData => {
  //         console.log(jsonData);
  //
  //         this.setState({
  //           events: jsonData
  //         })
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //
  //       fetch(`${endpoint}/${this.state.heroInfo.data.results[0].id}/series?limit=9&apikey=${apikey}`)
  //         .then(res => {
  //           return res.json()
  //         })
  //         .then(jsonData => {
  //           console.log(jsonData);
  //
  //           this.setState({
  //             series: jsonData
  //           })
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  // }

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
        <SupeheroDisplay submitted={this.state.submitted} heroInfo={this.state.heroInfo} comics={this.state.comics} events={this.state.events} series={this.state.series} />
      </div>
    )
  }
}
