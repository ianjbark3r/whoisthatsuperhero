import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, CardColumns, Row, Col } from 'reactstrap';

export default class Comics extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
      comics: {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2018 MARVEL",
        "attributionText": "Data provided by Marvel. © 2018 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
        "etag": "ad0fa6b2e9a5c7ec9cb73a080808af18dd6d2156",
        "data": {
          "offset": 0,
          "limit": 6,
          "total": 1642,
          "count": 6,
          "results": [
            {
              "id": 62189,
              "digitalId": 0,
              "title": "Mighty Thor Vol. 5: The Death of the Mighty Thor (Trade Paperback)",
              "issueNumber": 0,
              "variantDescription": "",
              "description": "Marvel Legacy hits Asgard with a bang — the death of the Mighty Thor! The final judgment comes as the Mangog arrives. The War Thor meets the beast head-on, but even the bloodthirst of this Ultimate hammer-wielder pales in comparison to the Mangog’s might! The battle rages as Jane Foster’s cancer takes a turn for the worse, and she might not have to wait for the final judgment at all. The clock is ticking, the War of the Realms is spreading and Mjolnir cannot save her this time. Can even the legendary Hercules help avert disaster? It’s the beginning of the end — one that will lead to the most dramatic finale in the Marvel Universe. The tragic and heroic story of Jane Foster finally reaches its heart-rending zenith! Collecting MIGHTY THOR (2015) #700-706 and MIGHTY THOR: AT THE GATES OF VALHALLA.",
              "modified": "2018-11-20T17:29:56-0500",
              "isbn": "978-1-302-90661-0",
              "upc": "",
              "diamondCode": "SEP181006",
              "ean": "9781302 906610 52499",
              "issn": "",
              "format": "Trade Paperback",
              "pageCount": 232,
              "textObjects": [
                {
                  "type": "issue_solicit_text",
                  "language": "en-us",
                  "text": "Marvel Legacy hits Asgard with a bang — the death of the Mighty Thor! The final judgment comes as the Mangog arrives. The War Thor meets the beast head-on, but even the bloodthirst of this Ultimate hammer-wielder pales in comparison to the Mangog’s might! The battle rages as Jane Foster’s cancer takes a turn for the worse, and she might not have to wait for the final judgment at all. The clock is ticking, the War of the Realms is spreading and Mjolnir cannot save her this time. Can even the legendary Hercules help avert disaster? It’s the beginning of the end — one that will lead to the most dramatic finale in the Marvel Universe. The tragic and heroic story of Jane Foster finally reaches its heart-rending zenith! Collecting MIGHTY THOR (2015) #700-706 and MIGHTY THOR: AT THE GATES OF VALHALLA."
                }
              ],
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62189",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/collection/62189/mighty_thor_vol_5_the_death_of_the_mighty_thor_trade_paperback?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/22813",
                "name": "Mighty Thor Vol. 5: The Death of the Mighty Thor (2018)"
              },
              "variants": [],
              "collections": [],
              "collectedIssues": [],
              "dates": [
                {
                  "type": "onsaleDate",
                  "date": "2018-11-28T00:00:00-0500"
                },
                {
                  "type": "focDate",
                  "date": "2018-10-08T00:00:00-0400"
                }
              ],
              "prices": [
                {
                  "type": "printPrice",
                  "price": 24.99
                }
              ],
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/5bf4913d84581",
                "extension": "jpg"
              },
              "images": [
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/5bf4913d84581",
                  "extension": "jpg"
                }
              ],
              "creators": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/62189/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11401",
                    "name": "various",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10186",
                    "name": "James Harren",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12516",
                    "name": "Walt Simonson",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12449",
                    "name": "Russell Dauterman",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                  }
                ],
                "returned": 6
              },
              "characters": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/62189/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009407",
                    "name": "Loki"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009480",
                    "name": "Odin"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017576",
                    "name": "Thor (Goddess of Thunder)"
                  }
                ],
                "returned": 4
              },
              "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/62189/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/134763",
                    "name": "cover from Mighty Thor (2018)",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/134764",
                    "name": "story from Mighty Thor (2018)",
                    "type": "interiorStory"
                  }
                ],
                "returned": 2
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/62189/events",
                "items": [],
                "returned": 0
              }
            },
            {
              "id": 68970,
              "digitalId": 0,
              "title": "Marvel Masterworks: The Mighty Thor Vol. 17 (Hardcover)",
              "issueNumber": 0,
              "variantDescription": "",
              "description": "Collects Thor (1966) #267-278 and Marvel Preview #10. Not just one but two teams with godlike creative talents grace the latest Marvel Masterworks! First, Len Wein and Walter Simonson pit Thor against nuclear-powered mercenaries, bang on the Stilt-Man like a tin can, rock the world in a battle with Blastaar and conquer the massive artificial intelligence F.A.U.S.T.! Then, Roy Thomas and John Buscema take up the hammer in some of the most beautifully illustrated Asgardian epics of all time! Tapping deep into Thor’s mythic roots, they craft amazing adventures featuring the villainy of Loki, the death of Balder, the Midgard Serpent and a new Norse Thor — all as foretold in the legend of Ragnarok! Plus: Rare and never-before-reprinted Thor and Hercules stories from MARVEL PREVIEW!",
              "modified": "2018-11-09T17:00:13-0500",
              "isbn": "978-1-302-90972-7",
              "upc": "",
              "diamondCode": "MAY180957",
              "ean": "9781302 909727 57500",
              "issn": "",
              "format": "Hardcover",
              "pageCount": 304,
              "textObjects": [
                {
                  "type": "issue_solicit_text",
                  "language": "en-us",
                  "text": "Collects Thor (1966) #267-278 and Marvel Preview #10. Not just one but two teams with godlike creative talents grace the latest Marvel Masterworks! First, Len Wein and Walter Simonson pit Thor against nuclear-powered mercenaries, bang on the Stilt-Man like a tin can, rock the world in a battle with Blastaar and conquer the massive artificial intelligence F.A.U.S.T.! Then, Roy Thomas and John Buscema take up the hammer in some of the most beautifully illustrated Asgardian epics of all time! Tapping deep into Thor’s mythic roots, they craft amazing adventures featuring the villainy of Loki, the death of Balder, the Midgard Serpent and a new Norse Thor — all as foretold in the legend of Ragnarok! Plus: Rare and never-before-reprinted Thor and Hercules stories from MARVEL PREVIEW!"
                }
              ],
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/68970",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/collection/68970/marvel_masterworks_the_mighty_thor_vol_17_hardcover?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/25069",
                "name": "Marvel Masterworks: The Mighty Thor Vol. 17 (2018)"
              },
              "variants": [],
              "collections": [],
              "collectedIssues": [],
              "dates": [
                {
                  "type": "onsaleDate",
                  "date": "2018-11-14T00:00:00-0500"
                },
                {
                  "type": "focDate",
                  "date": "2018-06-25T00:00:00-0400"
                }
              ],
              "prices": [
                {
                  "type": "printPrice",
                  "price": 75
                }
              ],
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5be5fae78943b",
                "extension": "jpg"
              },
              "images": [
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5be5fae78943b",
                  "extension": "jpg"
                }
              ],
              "creators": {
                "available": 11,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/68970/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1612",
                    "name": "John Buscema",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/957",
                    "name": "Val Mayerik",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/146",
                    "name": "Jim Starlin",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/7935",
                    "name": "Sheila Johnson",
                    "role": "colorist (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/586",
                    "name": "Michael Kelleher",
                    "role": "colorist (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1283",
                    "name": "Wesley Wong",
                    "role": "colorist (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/966",
                    "name": "Bill Mantlo",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2909",
                    "name": "Roy Thomas",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/967",
                    "name": "Len Wein",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12516",
                    "name": "Walt Simonson",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                  }
                ],
                "returned": 11
              },
              "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/68970/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  }
                ],
                "returned": 1
              },
              "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/68970/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/151010",
                    "name": "cover from MARVEL MASTERWORKS: THE MIGHTY THOR VOL. 17 HC (2018) #17",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/151011",
                    "name": "story from MARVEL MASTERWORKS: THE MIGHTY THOR VOL. 17 HC (2018) #17",
                    "type": "interiorStory"
                  }
                ],
                "returned": 2
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/68970/events",
                "items": [],
                "returned": 0
              }
            },
            {
              "id": 69929,
              "digitalId": 0,
              "title": "Thor (2018) #7",
              "issueNumber": 7,
              "variantDescription": "",
              "description": null,
              "modified": "2018-09-09T09:09:01-0400",
              "isbn": "",
              "upc": "75960608976500711",
              "diamondCode": "SEP180897",
              "ean": "",
              "issn": "",
              "format": "Comic",
              "pageCount": 32,
              "textObjects": [],
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/69929",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/issue/69929/thor_2018_7?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "purchase",
                  "url": "http://comicstore.marvel.com/Thor-7/digital-comic/49768?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/24308",
                "name": "Thor (2018 - Present)"
              },
              "variants": [],
              "collections": [],
              "collectedIssues": [],
              "dates": [
                {
                  "type": "onsaleDate",
                  "date": "2018-11-14T00:00:00-0500"
                },
                {
                  "type": "focDate",
                  "date": "2018-10-22T00:00:00-0400"
                }
              ],
              "prices": [
                {
                  "type": "printPrice",
                  "price": 3.99
                }
              ],
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/30/5be370a010e32",
                "extension": "jpg"
              },
              "images": [
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/30/5be370a010e32",
                  "extension": "jpg"
                },
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5b870099beb08",
                  "extension": "jpg"
                }
              ],
              "creators": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69929/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9586",
                    "name": "Tony Moore",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12376",
                    "name": "Wilson Moss",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11309",
                    "name": "Mike Del Mundo",
                    "role": "penciler (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                    "name": "Vc Joe Sabino",
                    "role": "letterer"
                  }
                ],
                "returned": 5
              },
              "characters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69929/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009407",
                    "name": "Loki"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  }
                ],
                "returned": 2
              },
              "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69929/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/154811",
                    "name": "cover from Thor (2018) #7",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/154812",
                    "name": "story from Thor (2018) #7",
                    "type": "interiorStory"
                  }
                ],
                "returned": 2
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69929/events",
                "items": [],
                "returned": 0
              }
            },
            {
              "id": 71956,
              "digitalId": 0,
              "title": "Marvel Super Hero Adventures: Captain Marvel - Mealtime Mayhem (2018) #1",
              "issueNumber": 1,
              "variantDescription": "",
              "description": null,
              "modified": "2018-11-01T17:27:04-0400",
              "isbn": "",
              "upc": "75960609162100111",
              "diamondCode": "SEP180995",
              "ean": "",
              "issn": "",
              "format": "Comic",
              "pageCount": 32,
              "textObjects": [],
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/71956",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/issue/71956/marvel_super_hero_adventures_captain_marvel_-_mealtime_mayhem_2018_1?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/26234",
                "name": "Marvel Super Hero Adventures: Captain Marvel - Mealtime Mayhem (2018)"
              },
              "variants": [],
              "collections": [],
              "collectedIssues": [],
              "dates": [
                {
                  "type": "onsaleDate",
                  "date": "2018-11-07T00:00:00-0500"
                },
                {
                  "type": "focDate",
                  "date": "2018-10-15T00:00:00-0400"
                }
              ],
              "prices": [
                {
                  "type": "printPrice",
                  "price": 3.99
                }
              ],
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5bdb6980a4113",
                "extension": "jpg"
              },
              "images": [
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5bdb6980a4113",
                  "extension": "jpg"
                },
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5b86faae54442",
                  "extension": "jpg"
                }
              ],
              "creators": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71956/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8652",
                    "name": "Jacob Chabot",
                    "role": "penciler (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12457",
                    "name": "Edward Devin Lewis",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13556",
                    "name": "Seanan Mcguire",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/918",
                    "name": "Ty Templeton",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13087",
                    "name": "Mario Del Pennino",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12863",
                    "name": "Irene Strychalski",
                    "role": "penciler"
                  }
                ],
                "returned": 6
              },
              "characters": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71956/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010787",
                    "name": "Eddie Brock"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009407",
                    "name": "Loki"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  }
                ],
                "returned": 4
              },
              "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71956/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/159909",
                    "name": "cover from Marvel Super Hero Adventures: Captain Marvel - TBD C (2018) #1",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/159910",
                    "name": "story from Marvel Super Hero Adventures: Captain Marvel - TBD C (2018) #1",
                    "type": "interiorStory"
                  }
                ],
                "returned": 2
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71956/events",
                "items": [],
                "returned": 0
              }
            },
            {
              "id": 73508,
              "digitalId": 0,
              "title": "What If? Thor (2018) #1",
              "issueNumber": 1,
              "variantDescription": "",
              "description": null,
              "modified": "2018-10-18T18:36:32-0400",
              "isbn": "",
              "upc": "75960609221500111",
              "diamondCode": "AUG180919",
              "ean": "",
              "issn": "",
              "format": "Comic",
              "pageCount": 32,
              "textObjects": [],
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/73508",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/issue/73508/what_if_thor_2018_1?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "purchase",
                  "url": "http://comicstore.marvel.com/WHAT-IF-THOR-1-1/digital-comic/49452?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/26491",
                "name": "What If? Thor (2018)"
              },
              "variants": [],
              "collections": [],
              "collectedIssues": [],
              "dates": [
                {
                  "type": "onsaleDate",
                  "date": "2018-10-24T00:00:00-0400"
                },
                {
                  "type": "focDate",
                  "date": "2018-10-01T00:00:00-0400"
                }
              ],
              "prices": [
                {
                  "type": "printPrice",
                  "price": 3.99
                }
              ],
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/5bc8ff549f926",
                "extension": "jpg"
              },
              "images": [
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/5bc8ff549f926",
                  "extension": "jpg"
                },
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/5b620e4407e4f",
                  "extension": "jpg"
                }
              ],
              "creators": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/73508/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13141",
                    "name": "Michele Bandini",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11748",
                    "name": "Marco Checchetto",
                    "role": "inker (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13551",
                    "name": "Dan Edington",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                    "name": "Darren Shan",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13232",
                    "name": "Ethan Sacks",
                    "role": "writer"
                  }
                ],
                "returned": 5
              },
              "characters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/73508/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009407",
                    "name": "Loki"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  }
                ],
                "returned": 2
              },
              "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/73508/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/163822",
                    "name": "cover from What If? Thor (2018) #1",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/163823",
                    "name": "story from What If? Thor (2018) #1",
                    "type": "interiorStory"
                  }
                ],
                "returned": 2
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/73508/events",
                "items": [],
                "returned": 0
              }
            },
            {
              "id": 69928,
              "digitalId": 0,
              "title": "Thor (2018) #6",
              "issueNumber": 6,
              "variantDescription": "",
              "description": null,
              "modified": "2018-10-09T09:02:47-0400",
              "isbn": "",
              "upc": "75960608976500611",
              "diamondCode": "AUG180947",
              "ean": "",
              "issn": "",
              "format": "Comic",
              "pageCount": 32,
              "textObjects": [],
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/69928",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/issue/69928/thor_2018_6?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "purchase",
                  "url": "http://comicstore.marvel.com/Thor-6/digital-comic/49530?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/24308",
                "name": "Thor (2018 - Present)"
              },
              "variants": [],
              "collections": [],
              "collectedIssues": [],
              "dates": [
                {
                  "type": "onsaleDate",
                  "date": "2018-10-17T00:00:00-0400"
                },
                {
                  "type": "focDate",
                  "date": "2018-09-24T00:00:00-0400"
                }
              ],
              "prices": [
                {
                  "type": "printPrice",
                  "price": 3.99
                }
              ],
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5bbe666ad5a96",
                "extension": "jpg"
              },
              "images": [
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5bbe666ad5a96",
                  "extension": "jpg"
                },
                {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/90/5b620a451e630",
                  "extension": "jpg"
                }
              ],
              "creators": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69928/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12376",
                    "name": "Wilson Moss",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/182",
                    "name": "Esad Ribic",
                    "role": "penciler (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                    "name": "Vc Joe Sabino",
                    "role": "letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13062",
                    "name": "Christian Ward",
                    "role": "inker"
                  }
                ],
                "returned": 5
              },
              "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69928/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  }
                ],
                "returned": 1
              },
              "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69928/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/154809",
                    "name": "cover from Thor (2018) #6",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/154810",
                    "name": "story from Thor (2018) #6",
                    "type": "interiorStory"
                  }
                ],
                "returned": 2
              },
              "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/69928/events",
                "items": [],
                "returned": 0
              }
            }
          ]
        }
      }
    }
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  // componentDidMount() {
  //   fetch(`${this.props.endpoint}/${this.props.id}/comics?limit=6&apikey=${this.props.apikey}`)
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
  // }

  render() {
    if (this.state.collapsed) {
      return (
        <>
          <h2><a href="/" onClick={this.handleClick}>Comics</a></h2>
          <hr />
        </>
      )
    } else {
      return (
        <>
          <h2><a href="/" onClick={this.handleClick}>Comics</a></h2>
          <p>A sampling of comics in which {this.props.name} makes an appearance.</p>
          <CardColumns>
            {this.state.comics.data.results.map((result, index) => {
                return (
                  <Card key={index}>
                    <a href={result.urls[0].url} target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} /></a>
                    <CardBody key={index}>
                      <CardTitle><a href={result.urls[0].url} target="_blank" rel="noopener noreferrer">{result.title}</a></CardTitle>
                      <CardText><strong>Price:</strong> ${result.prices[0].price}</CardText>
                    </CardBody>
                  </Card>
                )
              })}
            </CardColumns>
          <hr />
        </>
      )
    }
  }
}
