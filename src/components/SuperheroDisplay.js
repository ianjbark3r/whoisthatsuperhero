import React, { Component } from 'react';
import styled from 'styled-components';

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
              <h2>Comics</h2>
              <p>Here is a list of comics in which {name} makes an appearance.</p>
              <ul>
                {comics.items.map((comic, index) => {
                  return (
                    <li>{comic.name}</li>
                  )
                })}
              </ul>
              <hr />
              <h2>Series</h2>
              <p>Here is a list of comic series in which {name} makes an appearance.</p>
              <ul>
                {series.items.map((seriesEntry, index) => {
                  return (
                    <li key={index}>{seriesEntry.name}</li>
                  )
                })}
              </ul>
              <hr />
              <h2>Events</h2>
              <p>Here is a list of events in which {name} has been involved.</p>
              <ul>
                {events.items.map((event, index) => {
                  return (
                    <li key={index}>{event.name}</li>
                  )
                })}
              </ul>
              <hr />
              <h2>Links</h2>
              <p>Helpful links to more information regarding {name}</p>
                {urls.map((url, index) => {
                  return (
                    <a href={url.url}>
                      <button className="btn btn-outline-info" key={index}>{url.type}</button>
                    </a>
                  )
                })}
            </div>
          </div>
          <hr />
        </InfoDisplay>
      )
    }
  }
}
