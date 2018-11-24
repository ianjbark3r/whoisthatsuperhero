import React, { Component } from 'react';
import styled from 'styled-components';
import Comics from './Comics';
import Series from './Series';
import Events from './Events';
import Links from './Links';

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
    if (!this.props.submitted) {
      return <div></div>
    } else if (!this.props.heroInfo.data.results[0]) {
      return (
        <InvalidHero className="container">
          <h1>Invalid hero!</h1>
        </InvalidHero>
      )
    } else {
      const { attributionText } = this.props.heroInfo
      const { name, description, thumbnail, comics, series, events, urls } = this.props.heroInfo.data.results[0]
      const imgSrc = `${thumbnail.path}.${thumbnail.extension}`
      const imgAlt = `Photo of ${name}`

      return (
        <InfoDisplay className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <img src={imgSrc} alt={imgAlt} className="img-thumbnail" />
            </div>
            <div className="col-sm">
              <h1 className="display-1">{name}</h1>
              <hr />
              <p style={{ marginBottom: "1rem" }}><a href="http://marvel.com">{attributionText}</a></p>
              <p>{description}</p>
              <hr />
              <Comics comics={comics} name={name} />
              <Series series={series} name={name} />
              <Events events={events} name={name} />
              <Links urls={urls} name={name} />
            </div>
          </div>
        </InfoDisplay>
      )
    }
  }
}
