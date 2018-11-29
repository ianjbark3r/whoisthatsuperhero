import React, { Component } from 'react';
import styled from 'styled-components';
import Comics from '../components/Comics';
import Series from '../components/Series';
import Events from '../components/Events';
import Links from '../components/Links';

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
  render() {
    const { attributionText } = this.props.heroInfo;
    const { description, id, name, thumbnail, urls } = this.props.heroInfo.data.results[0];
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
            <Comics superhero={this.props.superhero} comics={this.props.comics} />
            <Series superhero={this.props.superhero} series={this.props.series} />
            <Events superhero={this.props.superhero} events={this.props.events} />
            <Links superhero={this.props.superhero} urls={urls} />
          </div>
        </div>
      </InfoDisplay>
    )
  }
}
