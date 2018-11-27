import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, CardColumns, Row, Col } from 'reactstrap';

export default class Events extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
      events: {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2018 MARVEL",
        "attributionText": "Data provided by Marvel. © 2018 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
        "etag": "cdeec8efc3f6f327fe62d21e8df6d7cdb23ea239",
        "data": {
          "offset": 0,
          "limit": 6,
          "total": 24,
          "count": 6,
          "results": [
            {
              "id": 116,
              "title": "Acts of Vengeance!",
              "description": "Loki sets about convincing the super-villains of Earth to attack heroes other than those they normally fight in an attempt to destroy the Avengers to absolve his guilt over inadvertently creating the team in the first place.",
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/events/116/acts_of_vengeance?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Acts_of_Vengeance!?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "modified": "2013-06-28T16:31:24-0400",
              "start": "1989-12-10 00:00:00",
              "end": "2008-01-04 00:00:00",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b",
                "extension": "jpg"
              },
              "creators": {
                "available": 108,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/116/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2707",
                    "name": "Jeff Albrecht",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2077",
                    "name": "Hilary Barta",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1277",
                    "name": "Bret Blevins",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5823",
                    "name": "Danny Bulanadi",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/87",
                    "name": "Mark Bagley",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/211",
                    "name": "Mark Bright",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1216",
                    "name": "Rich Buckler",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2713",
                    "name": "Gary Barnum",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1231",
                    "name": "Kurt Busiek",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/44",
                    "name": "Chris Claremont",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1935",
                    "name": "Paul Becton",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1909",
                    "name": "Steve Buccellato",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2043",
                    "name": "Eliot Brown",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3415",
                    "name": "John Calimee",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1871",
                    "name": "Ken Bruzenak",
                    "role": "letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
                    "name": "Janice Chiang",
                    "role": "letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/105",
                    "name": "Sal Buscema",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1827",
                    "name": "John Byrne",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5075",
                    "name": "Bobbie Chase",
                    "role": "editor"
                  }
                ],
                "returned": 20
              },
              "characters": {
                "available": 101,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/116/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009435",
                    "name": "Alicia Masters"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                    "name": "Alpha Flight"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009152",
                    "name": "Ancient One"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009156",
                    "name": "Apocalypse"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
                    "name": "Archangel"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009168",
                    "name": "Banshee"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009179",
                    "name": "Beetle (Abner Jenkins)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009329",
                    "name": "Ben Grimm"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009186",
                    "name": "Black Knight (Sir Percy of Scandia)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                    "name": "Black Widow"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010366",
                    "name": "Boom Boom"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009167",
                    "name": "Bruce Banner"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009213",
                    "name": "Bushwacker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011027",
                    "name": "Captain Universe"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009234",
                    "name": "Chameleon"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009239",
                    "name": "Clea"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                  }
                ],
                "returned": 20
              },
              "stories": {
                "available": 143,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/116/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12960",
                    "name": "Fantastic Four (1961) #334",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12961",
                    "name": "Shadows of Alarm..!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12962",
                    "name": "Fantastic Four (1961) #335",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12963",
                    "name": "Death by Debate",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12964",
                    "name": "Fantastic Four (1961) #336",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/12965",
                    "name": "Dark Congress!",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14056",
                    "name": "Amazing Spider-Man (1963) #326",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14057",
                    "name": "Amazing Spider-Man (1963) #326",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14058",
                    "name": "Amazing Spider-Man (1963) #327",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14059",
                    "name": "Cunning Attractions!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14060",
                    "name": "Amazing Spider-Man (1963) #328",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14061",
                    "name": "Shaw's Gambit",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14062",
                    "name": "Amazing Spider-Man (1963) #329",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14063",
                    "name": "Amazing Spider-Man (1963) #329",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14916",
                    "name": "AVENGERS (1963) #311",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14917",
                    "name": "The Weakest Point",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14918",
                    "name": "AVENGERS (1963) #312",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14919",
                    "name": "Has the Whole World Gone Mad?!?",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14920",
                    "name": "AVENGERS (1963) #313",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/14921",
                    "name": "Thieves Honor",
                    "type": "interiorStory"
                  }
                ],
                "returned": 20
              },
              "comics": {
                "available": 52,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/116/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12744",
                    "name": "Alpha Flight (1983) #79"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12746",
                    "name": "Alpha Flight (1983) #80"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6734",
                    "name": "The Amazing Spider-Man (1963) #326"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6735",
                    "name": "The Amazing Spider-Man (1963) #327"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6736",
                    "name": "The Amazing Spider-Man (1963) #328"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6737",
                    "name": "The Amazing Spider-Man (1963) #329"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/7188",
                    "name": "Avengers (1963) #311"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/7189",
                    "name": "Avengers (1963) #312"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/7190",
                    "name": "Avengers (1963) #313"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6933",
                    "name": "Avengers Annual (1967) #19"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17795",
                    "name": "West Coast Avengers (1985) #53"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17796",
                    "name": "West Coast Avengers (1985) #54"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17797",
                    "name": "West Coast Avengers (1985) #55"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17695",
                    "name": "Avengers West Coast: Darker than Scarlet (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/7746",
                    "name": "Captain America (1968) #365"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/7747",
                    "name": "Captain America (1968) #366"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/7748",
                    "name": "Captain America (1968) #367"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/8268",
                    "name": "Daredevil (1964) #275"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/8269",
                    "name": "Daredevil (1964) #276"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/20170",
                    "name": "Doctor Strange, Sorcerer Supreme (1988) #11"
                  }
                ],
                "returned": 20
              },
              "series": {
                "available": 22,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/116/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
                    "name": "Alpha Flight (1983 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                    "name": "Avengers (1963 - 1996)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                    "name": "Avengers Annual (1967 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3462",
                    "name": "Avengers West Coast: Darker than Scarlet (2008)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
                    "name": "Captain America (1968 - 1996)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
                    "name": "Daredevil (1964 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
                    "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                    "name": "Fantastic Four (1961 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
                    "name": "Incredible Hulk (1962 - 1999)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
                    "name": "Iron Man (1968 - 1996)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
                    "name": "New Mutants (1983 - 1991)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2271",
                    "name": "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/5860",
                    "name": "Punisher War Journal (1988 - 1995)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3695",
                    "name": "Quasar (1989 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2288",
                    "name": "Silver Surfer (1987 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
                    "name": "The Amazing Spider-Man (1963 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2083",
                    "name": "Thor (1966 - 1996)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                    "name": "Uncanny X-Men (1963 - 2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2092",
                    "name": "Web of Spider-Man (1985 - 1995)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3630",
                    "name": "West Coast Avengers (1985 - 1994)"
                  }
                ],
                "returned": 20
              },
              "next": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
                "name": "Days of Future Present"
              },
              "previous": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
                "name": "Atlantis Attacks"
              }
            },
            {
              "id": 233,
              "title": "Atlantis Attacks",
              "description": "Ghaur returns to complete his quest to resurrect the evil god Set, but his plan is opposed by Earth's heroes.",
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/events/233/atlantis_attacks?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Atlantis_Attacks?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "modified": "2013-06-25T13:49:06-0400",
              "start": "1989-01-01 00:00:00",
              "end": "2011-02-16 00:00:00",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/51c9d7f42a0c8",
                "extension": "jpg"
              },
              "creators": {
                "available": 95,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/233/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11401",
                    "name": "various",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6675",
                    "name": "Don Ald",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1836",
                    "name": "Terry Austin",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2077",
                    "name": "Hilary Barta",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2376",
                    "name": "James Brock",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3074",
                    "name": "Ralph Cabrera",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3456",
                    "name": "Gavin Curtis",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1898",
                    "name": "Mike DeCarlo",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2047",
                    "name": "Craig Anderson",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/87",
                    "name": "Mark Bagley",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1279",
                    "name": "Jon Bogdanove",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1216",
                    "name": "Rich Buckler",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1827",
                    "name": "John Byrne",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/270",
                    "name": "Gene Colan",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12572",
                    "name": "Amanda Connor",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3459",
                    "name": "Judy Bogdanove",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/954",
                    "name": "Gerry Conway",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1909",
                    "name": "Steve Buccellato",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
                    "name": "Janice Chiang",
                    "role": "letterer"
                  }
                ],
                "returned": 20
              },
              "characters": {
                "available": 48,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/233/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010354",
                    "name": "Adam Warlock"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
                    "name": "Archangel"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010366",
                    "name": "Boom Boom"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009219",
                    "name": "Cannonball"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010813",
                    "name": "Celestials"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009267",
                    "name": "Dazzler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                    "name": "Doctor Doom"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010807",
                    "name": "Eternals"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
                    "name": "Fantastic Four"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010868",
                    "name": "Firebird"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009315",
                    "name": "Gateway"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009337",
                    "name": "Havok"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009362",
                    "name": "Iceman"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
                    "name": "Invisible Woman"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                  }
                ],
                "returned": 20
              },
              "stories": {
                "available": 76,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/233/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15311",
                    "name": "",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15312",
                    "name": "For Crown and Conquest",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15313",
                    "name": "Savior of the Lost Artifacts",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15314",
                    "name": "Mission:  Impossible Man",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15315",
                    "name": "Doctor Doom's Strength Comparison Page",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/15316",
                    "name": "Game, Set, and Match: Ch. 14",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17393",
                    "name": "Avengers Annual (1967) #18",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17394",
                    "name": "Avengers Assembled",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17395",
                    "name": "The Initiation of Quasar",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17396",
                    "name": "Cap's Avengerability Analysis",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17397",
                    "name": "The Saga of the Serpent Crown Chapter 8: Manifest Destiny",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19855",
                    "name": "Atlantis Attacks Part 3",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19856",
                    "name": "Double Cross",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19857",
                    "name": "Jubilation Day",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19858",
                    "name": "The Saga of the Serpent Crown Part 3: Serpent In the Garden",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21535",
                    "name": "Cover #21535",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21536",
                    "name": "Splash!",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21622",
                    "name": "Cover #21622",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21623",
                    "name": "",
                    "type": "table of contents"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21624",
                    "name": "Here Be Monsters!",
                    "type": "interiorStory"
                  }
                ],
                "returned": 20
              },
              "comics": {
                "available": 14,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/233/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16898",
                    "name": "Amazing Spider-Man Annual (1964) #23"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/29321",
                    "name": "Atlantis Attacks (2011) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/29322",
                    "name": "Atlantis Attacks (DM Only) (2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/6932",
                    "name": "Avengers Annual (1967) #18"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17794",
                    "name": "West Coast Avengers (1985) #52"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/17842",
                    "name": "Avengers West Coast Annual (1986) #4"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/8701",
                    "name": "Fantastic Four Annual (1963) #22"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/19861",
                    "name": "Iron Man Annual (1970) #10"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/10417",
                    "name": "New Mutants (1983) #76"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/10339",
                    "name": "New Mutants Annual (1984) #5"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16675",
                    "name": "Thor Annual (1966) #14"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/18326",
                    "name": "What If? (1989) #25"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/23512",
                    "name": "X-Factor Annual (1986) #4"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/12359",
                    "name": "X-Men Annual (1970) #13"
                  }
                ],
                "returned": 14
              },
              "series": {
                "available": 14,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/233/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
                    "name": "Amazing Spider-Man Annual (1964 - 2018)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/10030",
                    "name": "Atlantis Attacks (2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/10031",
                    "name": "Atlantis Attacks (DM Only) (2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                    "name": "Avengers Annual (1967 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3624",
                    "name": "Avengers West Coast Annual (1986 - 1993)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2012",
                    "name": "Fantastic Four Annual (1963 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3723",
                    "name": "Iron Man Annual (1970 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
                    "name": "New Mutants (1983 - 1991)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2053",
                    "name": "New Mutants Annual (1984 - 1991)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2978",
                    "name": "Thor Annual (1966 - 2001)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3630",
                    "name": "West Coast Avengers (1985 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3648",
                    "name": "What If? (1989 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/6689",
                    "name": "X-Factor Annual (1986 - 1994)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2100",
                    "name": "X-Men Annual (1970 - 1994)"
                  }
                ],
                "returned": 14
              },
              "next": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                "name": "Acts of Vengeance!"
              },
              "previous": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
                "name": "Inferno"
              }
            },
            {
              "id": 234,
              "title": "Avengers Disassembled",
              "description": "Writer Brian Michael Bendis kicks off his historic run with the Avengers by bringing the previous era to a close alongside artist David Finch! Chaos reigns when of Earthâ€™s Mightiest Heroes turns against their teammates, leading the Avengers into a battle that not all will survive! Featuring Iron Man, Captain America, Hawkeye, the Scarlet Witch and more!",
              "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/events/234/avengers_disassembled?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Avengers_Disassembled?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "modified": "2013-10-18T16:38:16-0400",
              "start": "2004-07-28 00:00:00",
              "end": "2005-01-01 00:00:00",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/03/52127e32d3671",
                "extension": "jpg"
              },
              "creators": {
                "available": 51,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/234/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/498",
                    "name": "Greg Adams",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/544",
                    "name": "Wayne Faucher",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/492",
                    "name": "Tom Feister",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/476",
                    "name": "Drew Geraci",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/763",
                    "name": "Jack Jadson",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/314",
                    "name": "Neal Adams",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/374",
                    "name": "Steve Epting",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
                    "name": "Brian Michael Bendis",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/44",
                    "name": "Chris Claremont",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/506",
                    "name": "Joe Bennett",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5106",
                    "name": "Scot Eaton",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/248",
                    "name": "David Finch",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/460",
                    "name": "Tony Harris",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/357",
                    "name": "Jim Cheung",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                    "name": "Frank D'ARMATA",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                    "name": "Edgar Delgado",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/618",
                    "name": "Transparency Digital",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
                    "name": "Chris Eliopoulos",
                    "role": "letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
                    "name": "Vc Randy Gentile",
                    "role": "letterer"
                  }
                ],
                "returned": 20
              },
              "characters": {
                "available": 18,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/234/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010771",
                    "name": "Excalibur"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
                    "name": "Fantastic Four"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009539",
                    "name": "Franklin Richards"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009312",
                    "name": "Galactus"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
                    "name": "Hawkeye"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
                    "name": "Hydra"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
                    "name": "Invisible Woman"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
                    "name": "Mr. Fantastic"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
                    "name": "Scarlet Witch"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
                    "name": "Thing"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009525",
                    "name": "Valeria Richards"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009707",
                    "name": "Wasp"
                  }
                ],
                "returned": 18
              },
              "stories": {
                "available": 80,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/234/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/586",
                    "name": "Interior #586",
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
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/897",
                    "name": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 6 (OF 6) It's the end of all that is, and you've got a ringside seat for the last ",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
                    "name": "Fantastic Four (1998) #517",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
                    "name": "Interior #921",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
                    "name": "Fantastic Four (1998) #518",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
                    "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/924",
                    "name": "Fantastic Four (1998) #519",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/925",
                    "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" FINALE! PART 3 (OF 3) Galactus the World-Eater is coming to Earth to choose one of th",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/987",
                    "name": "Cover #987",
                    "type": "cover"
                  }
                ],
                "returned": 20
              },
              "comics": {
                "available": 39,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/234/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/532",
                    "name": "Avengers (1998) #500"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/767",
                    "name": "Avengers (1998) #501"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/845",
                    "name": "Avengers (1998) #502"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/923",
                    "name": "Avengers (1998) #503"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1703",
                    "name": "Avengers Disassembled (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/5685",
                    "name": "Avengers Disassembled (Hardcover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1490",
                    "name": "Avengers Disassembled: Captain America (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1491",
                    "name": "Avengers Disassembled: Iron Man (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/23900",
                    "name": "Avengers Disassembled: Iron Man, Thor & Captain America (Hardcover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1481",
                    "name": "Avengers Disassembled: Thor (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/90",
                    "name": "Avengers Finale (2004) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/595",
                    "name": "Captain America (2002) #29"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/514",
                    "name": "Captain America (2002) #30"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/801",
                    "name": "Captain America (2002) #31"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/893",
                    "name": "Captain America (2002) #32"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/605",
                    "name": "Captain America & the Falcon (2004) #5"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/573",
                    "name": "Captain America & the Falcon (2004) #6"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1448",
                    "name": "Excalibur (2004) #8"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/748",
                    "name": "Fantastic Four (1998) #517"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/826",
                    "name": "Fantastic Four (1998) #518"
                  }
                ],
                "returned": 20
              },
              "series": {
                "available": 15,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/234/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                    "name": "Avengers (1998 - 2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/344",
                    "name": "Avengers Disassembled (2005)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1795",
                    "name": "Avengers Disassembled (2006)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1398",
                    "name": "Avengers Disassembled: Captain America (2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1403",
                    "name": "Avengers Disassembled: Iron Man (2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/7067",
                    "name": "Avengers Disassembled: Iron Man, Thor & Captain America (2009 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1359",
                    "name": "Avengers Disassembled: Thor (2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/829",
                    "name": "Avengers Finale (2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/485",
                    "name": "Captain America (2002 - 2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/716",
                    "name": "Captain America & the Falcon (2004 - 2005)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/740",
                    "name": "Excalibur (2004 - 2005)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
                    "name": "Fantastic Four (1998 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2572",
                    "name": "Iron Man (1998 - 2004)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/556",
                    "name": "Spectacular Spider-Man (2003 - 2005)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/581",
                    "name": "Thor (1998 - 2004)"
                  }
                ],
                "returned": 15
              },
              "next": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
                "name": "Enemy of the State"
              },
              "previous": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
                "name": "Maximum Security"
              }
            },
            {
              "id": 310,
              "title": "Avengers VS X-Men",
              "description": "A 12-issue event written by the unprecedented team of Brian Michael Bendis, Jason Aaron, Jonathan Hickman, Ed Brubaker and Matt Fraction with art by the blockbuster trio of John Romita Jr., Olivier Coipel and Adam Kubert, Avengers VS X-Men brings Marvel's biggest characters up against the greatest threat they've ever faced: each other!",
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/events/310/avengers_vs_x-men?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "modified": "2013-07-01T21:41:57-0400",
              "start": "2012-04-04 00:00:00",
              "end": "2012-09-19 00:00:00",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5109a1f93b543",
                "extension": "jpg"
              },
              "creators": {
                "available": 76,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/310/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8571",
                    "name": "Guru-eFX",
                    "role": "Colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "Colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "Writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
                    "name": "Brian Michael Bendis",
                    "role": "Writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1004",
                    "name": "Daniel Acuna",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/694",
                    "name": "Mark Brooks",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1141",
                    "name": "Giuseppe Camuncoli",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/357",
                    "name": "Jim Cheung",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "artist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9799",
                    "name": "David Baldeon",
                    "role": "artist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11875",
                    "name": "Nick Bradshaw",
                    "role": "artist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/185",
                    "name": "Frank Cho",
                    "role": "artist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1192",
                    "name": "Ian Churchill",
                    "role": "artist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6170",
                    "name": "Olivier Coipel",
                    "role": "artist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13215",
                    "name": "Rain Beredo",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13309",
                    "name": "Elizabeth Dismang Breitweiser",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/367",
                    "name": "Ed Brubaker",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11798",
                    "name": "Matteo Buffagni",
                    "role": "Penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "Letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                  }
                ],
                "returned": 20
              },
              "characters": {
                "available": 51,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/310/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                    "name": "Black Widow"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009208",
                    "name": "Brood"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009214",
                    "name": "Cable"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009223",
                    "name": "Captain Britain"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010338",
                    "name": "Captain Marvel (Carol Danvers)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009310",
                    "name": "Emma Frost"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009313",
                    "name": "Gambit"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009317",
                    "name": "Genesis"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009320",
                    "name": "Giant Man"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
                    "name": "Hawkeye"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009343",
                    "name": "Hercules"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011428",
                    "name": "Hope Summers"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009362",
                    "name": "Iceman"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009367",
                    "name": "Iron Fist (Danny Rand)"
                  }
                ],
                "returned": 20
              },
              "stories": {
                "available": 128,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/310/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/77811",
                    "name": "Cover #77811",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/77812",
                    "name": "Interior #77812",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/84703",
                    "name": "WOLVERINE & THE X-MEN (2011) #11",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/84704",
                    "name": "Interior #84704",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90279",
                    "name": "AVENGERS: X-SANCTION (2011) #4",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90281",
                    "name": "AVENGERS: X-SANCTION (2011) #3",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90282",
                    "name": "Interior #90282",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90331",
                    "name": "Interior #90331",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90964",
                    "name": "WOLVERINE & THE X-MEN (2011) #13",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90965",
                    "name": "Interior #90965",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91099",
                    "name": "Cover #91099",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91100",
                    "name": "Interior #91100",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91101",
                    "name": "Cover #91101",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91102",
                    "name": "Interior #91102",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91103",
                    "name": "Cover #91103",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91104",
                    "name": "Interior #91104",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91107",
                    "name": "Cover #91107",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91108",
                    "name": "Interior #91108",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91117",
                    "name": "Cover #91117",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91118",
                    "name": "Interior #91118",
                    "type": "interiorStory"
                  }
                ],
                "returned": 20
              },
              "comics": {
                "available": 44,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/310/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/35232",
                    "name": "Avengers (2010) #24"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40405",
                    "name": "Avengers (2010) #25"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40410",
                    "name": "Avengers (2010) #26"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40249",
                    "name": "Avengers Academy (2010) #26"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40251",
                    "name": "Avengers Academy (2010) #29"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40250",
                    "name": "Avengers Academy (2010) #30"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40253",
                    "name": "Avengers Academy (2010) #31"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40254",
                    "name": "Avengers Academy (2010) #32"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40264",
                    "name": "Avengers Academy (2010) #33"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40258",
                    "name": "Avengers Academy (2010) #34"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41188",
                    "name": "Avengers Vs. X-Men (2012) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41191",
                    "name": "Avengers Vs. X-Men (2012) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41187",
                    "name": "Avengers Vs. X-Men (2012) #3"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41193",
                    "name": "Avengers Vs. X-Men (2012) #4"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41190",
                    "name": "Avengers Vs. X-Men (2012) #5"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41189",
                    "name": "Avengers Vs. X-Men (2012) #6"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41192",
                    "name": "Avengers Vs. X-Men (2012) #7"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41275",
                    "name": "Avengers Vs. X-Men (2012) #8"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41277",
                    "name": "Avengers Vs. X-Men (2012) #9"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/41276",
                    "name": "Avengers Vs. X-Men (2012) #10"
                  }
                ],
                "returned": 20
              },
              "series": {
                "available": 9,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/310/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
                    "name": "Avengers (2010 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
                    "name": "Avengers Academy (2010 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/15305",
                    "name": "Avengers Vs. X-Men (2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/14703",
                    "name": "Avengers: X-Sanction (2011 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9922",
                    "name": "New Avengers (2010 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9799",
                    "name": "Secret Avengers (2010 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/14914",
                    "name": "Uncanny X-Men (2011 - 2012)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13910",
                    "name": "Wolverine & the X-Men (2011 - 2014)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3754",
                    "name": "X-Men Legacy (2008 - 2012)"
                  }
                ],
                "returned": 9
              },
              "next": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/311",
                "name": "Marvel NOW!"
              },
              "previous": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
                "name": "Shattered Heroes"
              }
            },
            {
              "id": 235,
              "title": "Blood and Thunder",
              "description": "Driven mad by the machinations of the evil Valkyrie, Thor sets out to destroy the Nine Worlds but is opposed by the Silver Surfer, Warlock and the Infinity Watch.",
              "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/events/235/blood_and_thunder?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                },
                {
                  "type": "wiki",
                  "url": "http://marvel.com/universe/Blood_and_Thunder?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "modified": "2013-06-25T15:04:41-0400",
              "start": "1993-11-10 00:00:00",
              "end": "1994-02-10 00:00:00",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/51c9e9945b152",
                "extension": "jpg"
              },
              "creators": {
                "available": 26,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/235/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4796",
                    "name": "Keith Aiken",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/658",
                    "name": "Ron Lim",
                    "role": "penciller (cover)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4201",
                    "name": "Bob Almond",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2041",
                    "name": "Bill Anderson",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2386",
                    "name": "Harry Candelario",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1898",
                    "name": "Mike DeCarlo",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3864",
                    "name": "Pat Redding",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2047",
                    "name": "Craig Anderson",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8953",
                    "name": "Lynaire Brust",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1961",
                    "name": "Mike Rockwitz",
                    "role": "editor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5365",
                    "name": "Phil Hugh Felix",
                    "role": "letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1933",
                    "name": "Jack Morelli",
                    "role": "letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1936",
                    "name": "Gina Going",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2310",
                    "name": "Ovi Hondru",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1929",
                    "name": "Ian Laughlin",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1301",
                    "name": "Tom Grindberg",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/372",
                    "name": "Angel Medina",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/444",
                    "name": "Tom Raney",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3782",
                    "name": "Kris Renkewitz",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2673",
                    "name": "Ron Marz",
                    "role": "writer"
                  }
                ],
                "returned": 20
              },
              "characters": {
                "available": 13,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/235/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010354",
                    "name": "Adam Warlock"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010735",
                    "name": "Drax"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011061",
                    "name": "Eternity"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010763",
                    "name": "Gamora"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009451",
                    "name": "Moondragon"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009480",
                    "name": "Odin"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010762",
                    "name": "Pip"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009588",
                    "name": "Sif"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009592",
                    "name": "Silver Surfer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009652",
                    "name": "Thanos"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010350",
                    "name": "Valkyrie (Samantha Parrington)"
                  }
                ],
                "returned": 13
              },
              "stories": {
                "available": 29,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/235/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17292",
                    "name": "",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17293",
                    "name": "Distant Thunder [Blood and Thunder Part One]",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17294",
                    "name": "",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17295",
                    "name": "Absolute Power [Blood and Thunder Part Five]",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17296",
                    "name": "Blood and Thunder Part 9",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17297",
                    "name": "Ruins [Blood and Thunder Part Nine]",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17298",
                    "name": "",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/17299",
                    "name": "Fathers and Sons [Blood and Thunder The End]",
                    "type": ""
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/30922",
                    "name": "Cover #30922",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/30923",
                    "name": "Friends & Foes",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/30924",
                    "name": "Cover #30924",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/30925",
                    "name": "Strange affairs",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/30926",
                    "name": "Cover #30926",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/30927",
                    "name": "Common enemy",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/39260",
                    "name": "Cover #39260",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/39261",
                    "name": "Clash [Blood and Thunder pt. 4]",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/39262",
                    "name": "Cover #39262",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/39263",
                    "name": "Trial [Blood and Thunder pt. 8]",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/39264",
                    "name": "Cover #39264",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/39265",
                    "name": "Raid on Asgard [Blood and Thunder pt. 12]",
                    "type": "interiorStory"
                  }
                ],
                "returned": 20
              },
              "comics": {
                "available": 13,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/235/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/15226",
                    "name": "Silver Surfer (1987) #86"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/15227",
                    "name": "Silver Surfer (1987) #87"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/15228",
                    "name": "Silver Surfer (1987) #88"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/11796",
                    "name": "Thor (1966) #468"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/11797",
                    "name": "Thor (1966) #469"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/11798",
                    "name": "Thor (1966) #470"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/11799",
                    "name": "Thor (1966) #471"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/18428",
                    "name": "Warlock and the Infinity Watch (1992) #23"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/18429",
                    "name": "Warlock and the Infinity Watch (1992) #24"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/18430",
                    "name": "Warlock and the Infinity Watch (1992) #25"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/23488",
                    "name": "Warlock Chronicles (1993) #6"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/23489",
                    "name": "Warlock Chronicles (1993) #7"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/23490",
                    "name": "Warlock Chronicles (1993) #8"
                  }
                ],
                "returned": 13
              },
              "series": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/235/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2288",
                    "name": "Silver Surfer (1987 - 1998)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2083",
                    "name": "Thor (1966 - 1996)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3654",
                    "name": "Warlock and the Infinity Watch (1992 - 1995)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/6686",
                    "name": "Warlock Chronicles (1993 - 1994)"
                  }
                ],
                "returned": 4
              },
              "next": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/219",
                "name": "Siege of Darkness"
              },
              "previous": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
                "name": "Fatal Attractions"
              }
            },
            {
              "id": 296,
              "title": "Chaos War",
              "description": "When the Chaos King embarks on a campaign to wipe out all of existence, Hercules gathers the God Squad to stand in his way! Writers Greg Pak and Fred Van Lente join artist Khoi Pham to pit Herc and his rag tag teamâ€”including Thor, the Silver Surfer and Amadeus Choâ€”against an all-powerful evil as dead heroes and villains rise around them!",
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "urls": [
                {
                  "type": "detail",
                  "url": "http://marvel.com/comics/events/296/chaos_war?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
                }
              ],
              "modified": "2013-06-21T11:10:00-0400",
              "start": "2010-10-01 00:00:00",
              "end": "2011-03-06 00:00:00",
              "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/5109a003a9112",
                "extension": "jpg"
              },
              "creators": {
                "available": 35,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/296/creators",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4992",
                    "name": "Simon Bowland",
                    "role": "letterer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/128",
                    "name": "Doug Braithwaite",
                    "role": "artist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/665",
                    "name": "Reilly Brown",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13473",
                    "name": "Brian Ching",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/236",
                    "name": "Tommy Lee Edwards",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13251",
                    "name": "Salva Espin",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/483",
                    "name": "Tom Grummett",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/339",
                    "name": "Bryan Hitch",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6520",
                    "name": "Michael Kaluta",
                    "role": "penciller"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/44",
                    "name": "Chris Claremont",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6986",
                    "name": "J. M. DeMatteis",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9967",
                    "name": "Jim Mccann",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11347",
                    "name": "Brandon Montclare",
                    "role": "writer"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10288",
                    "name": "Marko Djurdjevic",
                    "role": "penciler"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11579",
                    "name": "Sunny Gho",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
                    "name": "Paul Mounts",
                    "role": "colorist"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/56",
                    "name": "Jae Lee",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13146",
                    "name": "Danny Miki",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/262",
                    "name": "Paul Neary",
                    "role": "inker"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/649",
                    "name": "Ed Mcguinness",
                    "role": "penciller (cover)"
                  }
                ],
                "returned": 20
              },
              "characters": {
                "available": 47,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/296/characters",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009146",
                    "name": "Abomination (Emil Blonsky)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                    "name": "Alpha Flight"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010784",
                    "name": "Ares"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009163",
                    "name": "Aurora"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009168",
                    "name": "Banshee"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                    "name": "Black Widow"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009224",
                    "name": "Captain Marvel (Mar-Vell)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009270",
                    "name": "Deathbird"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011037",
                    "name": "Deathcry"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
                    "name": "Fantastic Four"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009328",
                    "name": "Grim Reaper"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
                    "name": "Hawkeye"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009343",
                    "name": "Hercules"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
                    "name": "Invisible Woman"
                  }
                ],
                "returned": 20
              },
              "stories": {
                "available": 46,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/296/stories",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/71181",
                    "name": "INCREDIBLE HULKS (2009) #618",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/71182",
                    "name": "Interior #71182",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/76014",
                    "name": "Cover From Incredible Hulks (2009) #619",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/76015",
                    "name": "Interior From Incredible Hulks (2009) #619",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/76109",
                    "name": " Interior #76109",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/76687",
                    "name": "Cover #76687",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/76688",
                    "name": "Interior #76688",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80340",
                    "name": "Interior #80340",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80343",
                    "name": "Chaos War (2010) #2",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80344",
                    "name": "Interior #80344",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80345",
                    "name": "Chaos War (2010) #4",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80346",
                    "name": "Interior #80346",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80351",
                    "name": "Chaos War (2010) #3",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80352",
                    "name": "Interior #80352",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80836",
                    "name": "Cover #80836",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80837",
                    "name": "Interior #80837",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80838",
                    "name": "Cover #80838",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/80839",
                    "name": "Interior #80839",
                    "type": "interiorStory"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/81176",
                    "name": "CHAOS WAR TPB",
                    "type": "cover"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/81177",
                    "name": "CHAOS WAR TPB",
                    "type": "interiorStory"
                  }
                ],
                "returned": 20
              },
              "comics": {
                "available": 21,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/296/comics",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/36576",
                    "name": "Chaos War (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/34517",
                    "name": "Chaos War (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/36280",
                    "name": "Chaos War (2010) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/34535",
                    "name": "Chaos War (2010) #3"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/34523",
                    "name": "Chaos War (2010) #4"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/36278",
                    "name": "Chaos War (2010) #5"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37067",
                    "name": "Chaos War: Alpha Flight (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37066",
                    "name": "Chaos War: Ares (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37633",
                    "name": "Chaos War: Avengers (Trade Paperback)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37068",
                    "name": "Chaos War: Chaos King (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37064",
                    "name": "Chaos War: Dead Avengers (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37085",
                    "name": "Chaos War: Dead Avengers (2010) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37084",
                    "name": "Chaos War: Dead Avengers (2010) #3"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37065",
                    "name": "Chaos War: God Squad (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37062",
                    "name": "Chaos War: Thor (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37060",
                    "name": "Chaos War: Thor (2010) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37881",
                    "name": "Chaos War: X-Men (2010) #1"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/37882",
                    "name": "Chaos War: X-Men (2010) #2"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/31236",
                    "name": "Incredible Hulks (2010) #618"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/34050",
                    "name": "Incredible Hulks (2010) #619"
                  }
                ],
                "returned": 20
              },
              "series": {
                "available": 11,
                "collectionURI": "http://gateway.marvel.com/v1/public/events/296/series",
                "items": [
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/11854",
                    "name": "Chaos War (2010 - 2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/12966",
                    "name": "Chaos War (2010 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13260",
                    "name": "Chaos War: Alpha Flight (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13259",
                    "name": "Chaos War: Ares (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13527",
                    "name": "Chaos War: Avengers (2010 - Present)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13261",
                    "name": "Chaos War: Chaos King (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13257",
                    "name": "Chaos War: Dead Avengers (2010 - 2011)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13258",
                    "name": "Chaos War: God Squad (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13253",
                    "name": "Chaos War: Thor (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13588",
                    "name": "Chaos War: X-Men (2010)"
                  },
                  {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
                    "name": "Incredible Hulks (2010 - 2011)"
                  }
                ],
                "returned": 11
              },
              "next": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
                "name": "Age of X"
              },
              "previous": {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/59",
                "name": "Shadowland"
              }
            }
          ]
        }
      }
    }
  }

  // componentDidMount() {
  //   fetch(`${this.props.endpoint}/${this.props.id}/events?limit=6&apikey=${this.props.apikey}`)
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(jsonData => {
  //       console.log(jsonData);
  //
  //       this.setState({
  //         events: jsonData
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    if (this.state.collapsed) {
      return (
        <>
          <h2><a href="/" onClick={this.handleClick}>Events</a></h2>
          <hr />
        </>
      )
    } else {
    return (
      <>
        <h2><a href="/" onClick={this.handleClick}>Events</a></h2>
        <p>Events in which {this.props.name} played a role.</p>
        <CardColumns>
          {this.state.events.data.results.map((result, index) => {
            return (
              <Card key={index}>
                <a href={result.urls[0].url} target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} /></a>
                <CardBody key={index}>
                  <CardTitle><a href={result.urls[0].url} target="_blank" rel="noopener noreferrer">{result.title}</a></CardTitle>
                  <CardText>{result.description}</CardText>
                </CardBody>
              </Card>
              )
            })}
        </CardColumns>
        <hr />
      </>
    )}
  }
}
