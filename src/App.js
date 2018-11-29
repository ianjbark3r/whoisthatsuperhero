import React, { Component } from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SearchBar from './layout/SearchBar';
import SuperheroDisplay from './layout/SuperheroDisplay'

const endpoint = "https://gateway.marvel.com:443/v1/public/characters"
const apikey = "9d919d14053c4677a44d43af4024d3d1"

class App extends Component {
  defaultState = {
    superhero: 'Thor',
    heroInfo: {
      "attributionText": "Data provided by Marvel. © 2018 MARVEL",
      "data": {
        "results": [
          {
            "id": 1009664,
            "name": "Thor",
            "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
              "extension": "jpg"
            },
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=50480e93f4759a53b6ceaa7235ca1626"
              },
              {
                "type": "wiki",
                "url": "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=50480e93f4759a53b6ceaa7235ca1626"
              },
              {
                "type": "comiclink",
                "url": "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=50480e93f4759a53b6ceaa7235ca1626"
              }
            ]
          }
        ]
      }
    },
    id: 1009664,
    comics: {},
    series: {},
    events: {}
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = this.defaultState
  }

  _getHeroInfo() {
    console.log(`${endpoint}?nameStartsWith=${this.state.superhero}&limit=1&apikey=${apikey}`);

    fetch(`${endpoint}?nameStartsWith=${this.state.superhero}&limit=1&apikey=${apikey}`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          heroInfo: jsonData,
          id: jsonData.data.results[0].id
        })
      }).catch(err => console.err('Error:', err));
  }

  _getComics() {
    fetch(`${endpoint}/${this.state.id}/comics?limit=6&apikey=${apikey}`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          comics: jsonData
        })
      }).catch(err => console.err('Error:', err));
  }

  _getSeries() {
    fetch(`${endpoint}/${this.state.id}/series?limit=6&apikey=${apikey}`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          series: jsonData
        })
      }).catch(err => console.err('Error:', err));
  }

  _getEvents() {
    fetch(`${endpoint}/${this.state.id}/events?limit=6&apikey=${apikey}`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          events: jsonData
        })
      }).catch(err => console.err('Error:', err));
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      superhero: e.target.elements.name.value
    })
  }

  componentDidMount(e) {
    this._getHeroInfo();
    this._getComics();
    this._getSeries();
    this._getEvents();
  }

  render() {
    if (!this.state.heroInfo) {
      return (
        <div className="App">
          <Header />
          <SearchBar handleSubmit={this.handleSubmit} />
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Header />
          <SearchBar handleSubmit={this.handleSubmit} />
          <SuperheroDisplay superhero={this.state.superhero} heroInfo={this.state.heroInfo} comics={this.state.comics} series={this.state.series} events={this.state.events} />
          <Footer />
        </div>
      )
    }
  }
}

export default App;
