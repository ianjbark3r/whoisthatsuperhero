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

const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
`

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      heroInfo: {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2018 MARVEL",
        "attributionText": "Data provided by Marvel. © 2018 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
        "etag": "ce9c6acf76d2383cc8d50cd1469aa611d98ec5d8",
        "data": {
          "offset": 0,
          "limit": 20,
          "total": 1,
          "count": 1,
          "results": [
            {
              "id": 1009664,
              "name": "Thor",
              "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
              "modified": "2016-06-22T12:53:06-0400",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
                "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
              "comics": {
                "available": 1642,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
                    "name": "A+X (2012) #7"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
                    "name": "Age of Heroes (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/46852",
                    "name": "Alpha: Big Time (2013) #4"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
                    "name": "Alpha Flight (1983) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12725",
                    "name": "Alpha Flight (1983) #61"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
                    "name": "Alpha Flight (1983) #127"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/43170",
                    "name": "Amazing Spider-Man (1999) #57"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/43171",
                    "name": "Amazing Spider-Man (1999) #58"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6748",
                    "name": "The Amazing Spider-Man (1963) #339"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/277",
                    "name": "Amazing Spider-Man (1999) #500"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/5808",
                    "name": "Amazing Spider-Man (1999) #538"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
                    "name": "Amazing Spider-Man Annual (1964) #3"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16890",
                    "name": "Amazing Spider-Man Annual (1964) #16"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1262",
                    "name": "Amazing Spider-Man Vol. 6 (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/39896",
                    "name": "Art of Marvel Studios TPB Slipcase (Hardcover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/32769",
                    "name": "Astonishing Thor (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/33652",
                    "name": "Astonishing Thor (2010) #1 (FOILOGRAM VARIANT)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/32771",
                    "name": "Astonishing Thor (2010) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/32774",
                    "name": "Astonishing Thor (2010) #3"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/32776",
                    "name": "Astonishing Thor (2010) #4"
                  }
                ],
                "returned": 20
              },
              "series": {
                "available": 460,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
                    "name": "A+X (2012 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
                    "name": "Age of Heroes (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
                    "name": "Alpha Flight (1983 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
                    "name": "Alpha: Big Time (2013 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
                    "name": "Amazing Spider-Man (1999 - 2013)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
                    "name": "Amazing Spider-Man Annual (1964 - 2018)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
                    "name": "Amazing Spider-Man Vol. 6 (2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
                    "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9858",
                    "name": "Astonishing Thor (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
                    "name": "Astonishing X-Men (2004 - 2013)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
                    "name": "Avengers (1996 - 1997)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                    "name": "Avengers (1963 - 1996)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/24229",
                    "name": "Avengers (2018 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
                    "name": "Avengers (2016 - 2018)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
                    "name": "Avengers (2010 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                    "name": "Avengers (1998 - 2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
                    "name": "Avengers Academy (2010 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                    "name": "Avengers Annual (1967 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23945",
                    "name": "Avengers Annual (2001)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
                    "name": "Avengers Annual (2012)"
                  }
                ],
                "returned": 20
              },
              "stories": {
                "available": 2510,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/876",
                    "name": "THOR (1998) #76",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/877",
                    "name": "Interior #877",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/879",
                    "name": "Interior #879",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/880",
                    "name": "THOR (1998) #77",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/881",
                    "name": "Interior #881",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/882",
                    "name": "THOR (1998) #83",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/883",
                    "name": "Interior #883",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/884",
                    "name": "THOR (1998) #82",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/885",
                    "name": "Interior #885",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/886",
                    "name": "THOR (1998) #78",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/887",
                    "name": "Interior #887",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/888",
                    "name": "THOR (1998) #79",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/889",
                    "name": "Interior #889",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/890",
                    "name": "THOR (1998) #80",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/891",
                    "name": "Interior #891",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
                    "name": "THOR (1998) #81",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/893",
                    "name": "Interior #893",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/894",
                    "name": "THOR (1998) #84",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/895",
                    "name": "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/896",
                    "name": "THOR (1998) #85",
                    "type": "cover"
                  }
                ],
                "returned": 20
              },
              "events": {
                "available": 24,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/events",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                    "name": "Acts of Vengeance!"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
                    "name": "Atlantis Attacks"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
                    "name": "Avengers Disassembled"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
                    "name": "Avengers VS X-Men"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
                    "name": "Blood and Thunder"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
                    "name": "Chaos War"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                    "name": "Civil War"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                    "name": "Dark Reign"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
                    "name": "Evolutionary War"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                    "name": "Fear Itself"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
                    "name": "Inferno"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
                    "name": "Infinity"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                    "name": "Infinity War"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
                    "name": "Maximum Security"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
                    "name": "Mutant Massacre"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
                    "name": "Onslaught"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                    "name": "Secret Empire"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                    "name": "Secret Invasion"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
                    "name": "Secret Wars"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
                    "name": "Secret Wars II"
                  }
                ],
                "returned": 20
              },
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "comiclink",
                  "url": "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ]
            }
          ]
        }
      },
      id: '',
      submitted: false,
      superhero: ''
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

    this.setState({
      submitted: true,
      id: this.state.heroInfo.data.results[0].id
    })

    // if (this.state.superhero) {
    //   const name = this.state.superhero
    //
    //   fetch(`${endpoint}?nameStartsWith=${name}&limit=1&apikey=${apikey}`)
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(jsonData => {
    //       this.setState({
    //         submitted: true,
    //         heroInfo: jsonData,
    //         id: jsonData.data.results[0].id
    //       })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //   })
    // }
  }

  render() {
    return (
      <div>
        <SearchArea>
          <Title>Who is that Marvel superhero?</Title>
          <div className="d-flex justify-content-center">
            <Form className="d-flex justify-content-center" onSubmit={this.handleSubmit}>
              <Input  type="text" name="search"  placeholder="Thor, Iron Man, etc." onChange={this.handleChange}></Input>
              <Button type="submit" className="btn btn-light ml-2">Search</Button>
            </Form>
          </div>
        </SearchArea>
        <SupeheroDisplay submitted={this.state.submitted} heroInfo={this.state.heroInfo} id={this.state.id} endpoint={endpoint} apikey={apikey} />
      </div>
    )
  }
}
