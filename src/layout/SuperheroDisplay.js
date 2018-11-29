import React, { Component } from 'react';
import styled from 'styled-components';
import Comics from '../components/Comics';
import Series from '../components/Series';
import Events from '../components/Events';
import Links from '../components/Links';

const endpoint = "https://gateway.marvel.com:443/v1/public/characters"
const apikey = "9d919d14053c4677a44d43af4024d3d1"

const InfoDisplay = styled.div`
  padding-bottom: 10vh;
  padding-top: 5vh;
  h1, h2 {
    font-family: 'Oswald', sans-serif;
  }
`

const InvalidHero = styled.div`
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: center;
`

export default class SuperheroDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prevSuperhero: '',
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
      id: 1009664
    }
  }

  static getDerivedStateFromProps() {
    if (props.superhero !== state.prevSuperhero) {
      fetch(`${endpoint}?nameStartsWith=${this.props.superhero}&limit=1&apikey=${apikey}`)
        .then(res => res.json())
        .then(jsonData => {
          return {
            prevSuperhero: props.superhero,
            heroInfo: jsonData,
            id: jsonData.data.results[0].id
          }
        }).catch(err => console.err('Error:', err));
    }
    return null;
  }

  render() {
    const { attributionText } = this.state.heroInfo;
    const { description, id, name, thumbnail, urls } = this.state.heroInfo.data.results[0];
    const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
    const imgAlt = `Photo of ${name}`;

    return (
      <InfoDisplay className="container-fluid">
        <div className="row">
          <div className="col-md">
            <img src={imgSrc} alt={imgAlt} className="img-thumbnail" />
          </div>
          <div className="col-sm">
            <h1 className="display-1">{name}</h1>
            <hr />
            <p style={{ marginBottom: "1rem" }}><a href="http://marvel.com">{attributionText}</a></p>
            <p>{description}</p>
            <hr />
            <Comics
              superhero={this.props.superhero}
              id={this.state.id}
              endpoint={endpoint}
              apikey={apikey}
            />
            <Series
              superhero={this.props.superhero}
              id={this.state.id}
              endpoint={endpoint}
              apikey={apikey}
            />
            <Events
              superhero={this.props.superhero}
              id={this.state.id}
              endpoint={endpoint}
              apikey={apikey}
            />
            <Links
              superhero={this.props.superhero}
              id={this.state.id}
              endpoint={endpoint}
              apikey={apikey}
            />
          </div>
        </div>
      </InfoDisplay>
    )
  }
}
