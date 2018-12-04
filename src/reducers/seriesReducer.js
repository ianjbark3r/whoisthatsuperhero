const seriesReducer = (state = {
    isFetching: false,
    collapsed: false,
    response: {
      "code": 200,
      "status": "Ok",
      "copyright": "© 2018 MARVEL",
      "attributionText": "Data provided by Marvel. © 2018 MARVEL",
      "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
      "etag": "cd404eda43177eaedbb73c52e9c617d0451ba57b",
      "data": {
        "offset": 0,
        "limit": 9,
        "total": 460,
        "count": 9,
        "results": [
          {
            "id": 16450,
            "title": "A+X (2012 - Present)",
            "description": "Get ready for action-packed stories featuring team-ups from your favorite Marvel heroes every month! First, a story where Wolverine and Hulk come together, and then Captain America and Cable meet up! But will each partner's combined strength be enough?",
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/16450/ax_2012_-_present?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 2012,
            "endYear": 2099,
            "rating": "Rated T",
            "type": "ongoing",
            "modified": "2014-03-13T10:35:14-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/511e88a20ae34",
              "extension": "jpg"
            },
            "creators": {
              "available": 84,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/16450/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                  "name": "Jason Aaron",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                  "name": "Kaare Andrews",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8658",
                  "name": "James Asmus",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                  "name": "Chris Bachalo",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/9127",
                  "name": "Mike Benson",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12452",
                  "name": "Mike Costa",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                  "name": "Axel Alonso",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11575",
                  "name": "Kris Anka",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/506",
                  "name": "Joe Bennett",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13215",
                  "name": "Rain Beredo",
                  "role": "colorist (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/694",
                  "name": "Mark Brooks",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11543",
                  "name": "Dan Brown",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12604",
                  "name": "Jim Campbell",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/9937",
                  "name": "Jim Charalampidis",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/665",
                  "name": "Reilly Brown",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1141",
                  "name": "Giuseppe Camuncoli",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
                  "name": "Stefano Caselli",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/808",
                  "name": "Howard Chaykin",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12467",
                  "name": "Orphans Cheeps",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                  "name": "Virtual Calligr",
                  "role": "letterer"
                }
              ],
              "returned": 20
            },
            "characters": {
              "available": 37,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/16450/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009148",
                  "name": "Absorbing Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                  "name": "Beast"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
                  "name": "Black Panther"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                  "name": "Black Widow"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009211",
                  "name": "Bucky"
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
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010338",
                  "name": "Captain Marvel (Carol Danvers)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                  "name": "Deadpool"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                  "name": "Doctor Strange"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009277",
                  "name": "Domino"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009279",
                  "name": "Doop"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009301",
                  "name": "Fantomex"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009313",
                  "name": "Gambit"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
                  "name": "Hawkeye"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                  "name": "Hulk"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009362",
                  "name": "Iceman"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009367",
                  "name": "Iron Fist (Danny Rand)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                  "name": "Kitty Pryde"
                }
              ],
              "returned": 20
            },
            "stories": {
              "available": 66,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/16450/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97110",
                  "name": "A+X (2012) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97166",
                  "name": "cover from All-New X-Men (2012) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97167",
                  "name": "story from All-New X-Men (2012) #1",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97170",
                  "name": "cover from All-New X-Men (2012) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97171",
                  "name": "story from All-New X-Men (2012) #1",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97172",
                  "name": "cover from All-New X-Men (2012) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97173",
                  "name": "story from All-New X-Men (2012) #1",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97174",
                  "name": "cover from All-New X-Men (2012) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97175",
                  "name": "story from All-New X-Men (2012) #1",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97176",
                  "name": "A+X (2012) #2",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97177",
                  "name": "story from All-New X-Men (2012) #1",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97182",
                  "name": "A+X (2012) #3",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97183",
                  "name": "story from All-New X-Men (2012) #3",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97186",
                  "name": "cover from All-New X-Men (2012) #4",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97187",
                  "name": "story from All-New X-Men (2012) #4",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97188",
                  "name": "A+X (2012) #4",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97189",
                  "name": "story from All-New X-Men (2012) #5",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97190",
                  "name": "cover from All-New X-Men (2012) #6",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97191",
                  "name": "story from All-New X-Men (2012) #6",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/97192",
                  "name": "cover from All-New X-Men (2012) #7",
                  "type": "cover"
                }
              ],
              "returned": 20
            },
            "comics": {
              "available": 27,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/16450/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
                  "name": "A+X (2012) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/45763",
                  "name": "A+X (2012) #1 (2nd Printing Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43495",
                  "name": "A+X (2012) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43498",
                  "name": "A+X (2012) #3"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43499",
                  "name": "A+X (2012) #3 (Mcguinness Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43500",
                  "name": "A+X (2012) #3 (Mcguinness Sketch Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/44569",
                  "name": "A+X (2012) #3 (Tan Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
                  "name": "A+X (2012) #4"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43502",
                  "name": "A+X (2012) #4 (Mcguinness Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/45765",
                  "name": "A+X (2012) #4 (Brooks Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43503",
                  "name": "A+X (2012) #4 (Mcguinness Sketch Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43504",
                  "name": "A+X (2012) #5"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/45766",
                  "name": "A+X (2012) #5 (Del Mundo Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43505",
                  "name": "A+X (2012) #6"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
                  "name": "A+X (2012) #7"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/47068",
                  "name": "A+X (2012) #7 (Renaud Iron Man Many Armors Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43507",
                  "name": "A+X (2012) #8"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43508",
                  "name": "A+X (2012) #9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43509",
                  "name": "A+X (2012) #10"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43510",
                  "name": "A+X (2012) #11"
                }
              ],
              "returned": 20
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/16450/events",
              "items": [],
              "returned": 0
            },
            "next": null,
            "previous": null
          },
          {
            "id": 9790,
            "title": "Age of Heroes (2010)",
            "description": null,
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/9790/age_of_heroes_2010?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 2010,
            "endYear": 2010,
            "rating": "",
            "type": "",
            "modified": "-0001-11-30T00:00:00-0500",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/50/4baa86beaef47",
              "extension": "jpg"
            },
            "creators": {
              "available": 27,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9790/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12226",
                  "name": "Jean-&#8203;Francois Beaulieu",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10454",
                  "name": "Nathan Fairbairn",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10859",
                  "name": "JORGE FARES MAESE RAMIREZ",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
                  "name": "Jay David Ramos",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10783",
                  "name": "John Rauch",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/159",
                  "name": "Joe Casey",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1132",
                  "name": "Matt Fraction",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4990",
                  "name": "Kevin Grevioux",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13164",
                  "name": "Elliott Kalan",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10200",
                  "name": "Jonathan Maberry",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/9778",
                  "name": "Nathan Fox",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/56",
                  "name": "Jae Lee",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8142",
                  "name": "Brendan McCarthy",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5131",
                  "name": "Shawn Moll",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8728",
                  "name": "Jefte Palo",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1129",
                  "name": "Yanick Paquette",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/708",
                  "name": "Mike Perkins",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/7219",
                  "name": "MICHEL Lacombe",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/447",
                  "name": "Victor Olazaba",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/878",
                  "name": "Dave Lanphear",
                  "role": "letterer"
                }
              ],
              "returned": 20
            },
            "characters": {
              "available": 14,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9790/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011339",
                  "name": "Blue Marvel"
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
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
                  "name": "Cloud 9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011432",
                  "name": "Enchantress (Sylvie Lushton)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009316",
                  "name": "Gauntlet (Joseph Green)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
                  "name": "Gravity"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011335",
                  "name": "Maria Hill"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009228",
                  "name": "Sharon Carter"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                  "name": "Spider-Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010860",
                  "name": "Squirrel Girl"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009648",
                  "name": "Taskmaster"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                  "name": "Thor"
                }
              ],
              "returned": 14
            },
            "stories": {
              "available": 11,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9790/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/69006",
                  "name": "Cover #69006",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/69007",
                  "name": "Interior #69007",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/69010",
                  "name": "Cover #69010",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/69011",
                  "name": "Interior #69011",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/69012",
                  "name": "Cover #69012",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/69013",
                  "name": "Interior #69013",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/74917",
                  "name": "Cover #74917",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/74919",
                  "name": "Interior #74919",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81068",
                  "name": "Cover #81068",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81069",
                  "name": "Interior #81069",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/113200",
                  "name": "Cover from Age of Heroes (2010) #2",
                  "type": "cover"
                }
              ],
              "returned": 11
            },
            "comics": {
              "available": 6,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9790/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
                  "name": "Age of Heroes (2010) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/33323",
                  "name": "Age of Heroes (2010) #1 (HEROIC AGE VARIANT)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/36522",
                  "name": "Age of Heroes (2010) #1 (2ND PRINTING VARIANT)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/33566",
                  "name": "Age of Heroes (2010) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/30092",
                  "name": "Age of Heroes (2010) #3"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/30093",
                  "name": "Age of Heroes (2010) #4"
                }
              ],
              "returned": 6
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9790/events",
              "items": [],
              "returned": 0
            },
            "next": null,
            "previous": null
          },
          {
            "id": 2116,
            "title": "Alpha Flight (1983 - 1994)",
            "description": null,
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/2116/alpha_flight_1983_-_1994?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 1983,
            "endYear": 1994,
            "rating": "",
            "type": "ongoing",
            "modified": "2016-08-30T11:17:58-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/50/57c5a37acf5cc",
              "extension": "jpg"
            },
            "creators": {
              "available": 87,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2116/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3389",
                  "name": "Ian Akin",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2707",
                  "name": "Jeff Albrecht",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1836",
                  "name": "Terry Austin",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2720",
                  "name": "Michael Bair",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2077",
                  "name": "Hilary Barta",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4469",
                  "name": "Richard Bennett",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5823",
                  "name": "Danny Bulanadi",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3074",
                  "name": "Ralph Cabrera",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1865",
                  "name": "Diana Albers",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1871",
                  "name": "Ken Bruzenak",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                  "name": "Virtual Calligr",
                  "role": "letterer"
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
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3394",
                  "name": "Craig Brasfield",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1298",
                  "name": "June Brigman",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1185",
                  "name": "Pat Broderick",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/105",
                  "name": "Sal Buscema",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3415",
                  "name": "John Calimee",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3404",
                  "name": "Dario Carrasco Jr.",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1827",
                  "name": "John Byrne",
                  "role": "writer"
                }
              ],
              "returned": 20
            },
            "characters": {
              "available": 64,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2116/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                  "name": "Alpha Flight"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
                  "name": "Archangel"
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
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009186",
                  "name": "Black Knight (Sir Percy of Scandia)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009206",
                  "name": "Box"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009212",
                  "name": "Bullseye"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                  "name": "Captain America"
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
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009255",
                  "name": "Crystal"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                  "name": "Cyclops"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
                  "name": "Daredevil"
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
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                  "name": "Doctor Strange"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009306",
                  "name": "Firestar"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009309",
                  "name": "Forge"
                }
              ],
              "returned": 20
            },
            "stories": {
              "available": 329,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2116/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21096",
                  "name": "Alpha Flight (1983) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21097",
                  "name": "Tundra!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21098",
                  "name": "Cover #21098",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21099",
                  "name": "Blood Battle",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21100",
                  "name": "Family Ties",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21101",
                  "name": "Cover #21101",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21102",
                  "name": "The Final Option, Part Four: Decisions of Trust",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21103",
                  "name": "Cover #21103",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21104",
                  "name": "Death and How To Live It",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21105",
                  "name": "Cover #21105",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21106",
                  "name": "...I Want To Live",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21107",
                  "name": "Cover #21107",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21108",
                  "name": "Spontaneous Combustion",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21109",
                  "name": "Cover #21109",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21110",
                  "name": "Headache",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21111",
                  "name": "Cover #21111",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21112",
                  "name": "The Bachelor Party",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21113",
                  "name": "Cover #21113",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21114",
                  "name": "The Walking Wounded",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/21115",
                  "name": "World Tour Part 1",
                  "type": "cover"
                }
              ],
              "returned": 20
            },
            "comics": {
              "available": 130,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2116/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
                  "name": "Alpha Flight (1983) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12679",
                  "name": "Alpha Flight (1983) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12690",
                  "name": "Alpha Flight (1983) #3"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12701",
                  "name": "Alpha Flight (1983) #4"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12712",
                  "name": "Alpha Flight (1983) #5"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12723",
                  "name": "Alpha Flight (1983) #6"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12734",
                  "name": "Alpha Flight (1983) #7"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12745",
                  "name": "Alpha Flight (1983) #8"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12756",
                  "name": "Alpha Flight (1983) #9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12638",
                  "name": "Alpha Flight (1983) #10"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12649",
                  "name": "Alpha Flight (1983) #11"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12660",
                  "name": "Alpha Flight (1983) #12"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12671",
                  "name": "Alpha Flight (1983) #13"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12673",
                  "name": "Alpha Flight (1983) #14"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12674",
                  "name": "Alpha Flight (1983) #15"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12675",
                  "name": "Alpha Flight (1983) #16"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12676",
                  "name": "Alpha Flight (1983) #17"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12677",
                  "name": "Alpha Flight (1983) #18"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12678",
                  "name": "Alpha Flight (1983) #19"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/12680",
                  "name": "Alpha Flight (1983) #20"
                }
              ],
              "returned": 20
            },
            "events": {
              "available": 3,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2116/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                  "name": "Acts of Vengeance!"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                  "name": "Infinity War"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
                  "name": "Secret Wars II"
                }
              ],
              "returned": 3
            },
            "next": null,
            "previous": null
          },
          {
            "id": 17650,
            "title": "Alpha: Big Time (2013 - Present)",
            "description": null,
            "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/17650/alpha_big_time_2013_-_present?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 2013,
            "endYear": 2099,
            "rating": "Rated T+",
            "type": "limited",
            "modified": "2013-04-26T12:02:05-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/50f9b4b2208ce",
              "extension": "jpg"
            },
            "creators": {
              "available": 6,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/17650/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11647",
                  "name": "Tom Brennan",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                  "name": "Jeff Youngquist",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12253",
                  "name": "Joshua Hale Fialkov",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/9200",
                  "name": "Nuno Plati",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10090",
                  "name": "Joe Quinones",
                  "role": "inker (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/72",
                  "name": "Humberto Ramos",
                  "role": "penciler (cover)"
                }
              ],
              "returned": 6
            },
            "characters": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/17650/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                  "name": "Spider-Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                  "name": "Thor"
                }
              ],
              "returned": 2
            },
            "stories": {
              "available": 14,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/17650/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105316",
                  "name": "cover from Alpha (2013) #0.1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105317",
                  "name": "story from Alpha (2013) #0.1",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105318",
                  "name": "cover from Alpha (2013) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105319",
                  "name": "story from Alpha (2013) #1",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105322",
                  "name": "cover from Alpha (2013) #2",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105323",
                  "name": "story from Alpha (2013) #2",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105324",
                  "name": "cover from Alpha (2013) #3",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105325",
                  "name": "story from Alpha (2013) #3",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105326",
                  "name": "cover from Alpha (2013) #4",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105327",
                  "name": "story from Alpha (2013) #4",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105328",
                  "name": "cover from Alpha (2013) #5",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105329",
                  "name": "story from Alpha (2013) #5",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105570",
                  "name": "cover from Alpha (2013) #1 (TBD ARTIST VARIANT)",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/105571",
                  "name": "story from Alpha (2013) #1 (TBD ARTIST VARIANT)",
                  "type": "interiorStory"
                }
              ],
              "returned": 14
            },
            "comics": {
              "available": 7,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/17650/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/46848",
                  "name": "Alpha: Big Time (2013) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/46979",
                  "name": "Alpha: Big Time (2013) #1 (Quinones Variant)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/46850",
                  "name": "Alpha: Big Time (2013) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/46851",
                  "name": "Alpha: Big Time (2013) #3"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/46852",
                  "name": "Alpha: Big Time (2013) #4"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/46853",
                  "name": "Alpha: Big Time (2013) #5"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/46847",
                  "name": "Alpha: Big Time (2013) #0.1"
                }
              ],
              "returned": 7
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/17650/events",
              "items": [],
              "returned": 0
            },
            "next": null,
            "previous": null
          },
          {
            "id": 454,
            "title": "Amazing Spider-Man (1999 - 2013)",
            "description": "Looking for the one superhero comic you just have to read? You've found it! <i>Amazing Spider-Man</i> is the cornerstone of the Marvel Universe. This is where you'll find all the big-time action, major storylines and iconic Spider-Man magic you'd come to expect from the Wall-Crawler.",
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/454/amazing_spider-man_1999_-_2013?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 1999,
            "endYear": 2013,
            "rating": "T+",
            "type": "ongoing",
            "modified": "2015-09-15T11:43:06-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/51252718e1c2d",
              "extension": "jpg"
            },
            "creators": {
              "available": 238,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/454/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11403",
                  "name": "RSComicraft",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/6694",
                  "name": "Wes Abbot",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2529",
                  "name": "Liz Agraphiotis",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/498",
                  "name": "Greg Adams",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/9046",
                  "name": "Mario Alberti",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4061",
                  "name": "Marlo Alquiza",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/415",
                  "name": "Derec Aucoin",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11491",
                  "name": "Michael Babinski",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                  "name": "Axel Alonso",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11841",
                  "name": "Sana Amanat",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1040",
                  "name": "Jay Anacleto",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11398",
                  "name": "Adam Archer",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/9344",
                  "name": "Robert Atkins",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/465",
                  "name": "Paul Azaceta",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                  "name": "Chris Bachalo",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2038",
                  "name": "John Beatty",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3198",
                  "name": "Howard Bender",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
                  "name": "Brian Michael Bendis",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5021",
                  "name": "Paul Benjamin",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13215",
                  "name": "Rain Beredo",
                  "role": "colorist"
                }
              ],
              "returned": 20
            },
            "characters": {
              "available": 145,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/454/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009154",
                  "name": "Annihilus"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010773",
                  "name": "Arachne"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017438",
                  "name": "Araña"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010784",
                  "name": "Ares"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009329",
                  "name": "Ben Grimm"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009489",
                  "name": "Ben Parker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011346",
                  "name": "Ben Reilly"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010782",
                  "name": "Ben Urich"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010325",
                  "name": "Betty Brant"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009185",
                  "name": "Black Cat"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
                  "name": "Black Panther"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                  "name": "Black Widow"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009195",
                  "name": "Blastaar"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009199",
                  "name": "Blob"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011264",
                  "name": "Blue Shield"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009212",
                  "name": "Bullseye"
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
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010338",
                  "name": "Captain Marvel (Carol Danvers)"
                }
              ],
              "returned": 20
            },
            "stories": {
              "available": 899,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/454/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/482",
                  "name": "Cover #482",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/483",
                  "name": "Interior #483",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/486",
                  "name": "Cover #486",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/487",
                  "name": "Interior #487",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1018",
                  "name": "Amazing Spider-Man (1999) #500",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1019",
                  "name": "Interior #1019",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1020",
                  "name": "Amazing Spider-Man (1999) #501",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1021",
                  "name": "Interior #1021",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1022",
                  "name": "Amazing Spider-Man (1999) #502",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1023",
                  "name": "Interior #1023",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1125",
                  "name": "Amazing Spider-Man (1999) #514",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1126",
                  "name": "6 of 6 - Sins Past",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1137",
                  "name": "Amazing Spider-Man (1999) #505",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1138",
                  "name": "Interior #1138",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1139",
                  "name": "Amazing Spider-Man (1999) #506",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1140",
                  "name": "Interior #1140",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1141",
                  "name": "Amazing Spider-Man (1999) #507",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1142",
                  "name": "Interior #1142",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1143",
                  "name": "Amazing Spider-Man (1999) #510",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1144",
                  "name": "Interior #1144",
                  "type": "interiorStory"
                }
              ],
              "returned": 20
            },
            "comics": {
              "available": 408,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/454/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37894",
                  "name": "Amazing Spider-Man (1999) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37895",
                  "name": "Amazing Spider-Man (1999) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37896",
                  "name": "Amazing Spider-Man (1999) #3"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37901",
                  "name": "Amazing Spider-Man (1999) #4"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37899",
                  "name": "Amazing Spider-Man (1999) #5"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37900",
                  "name": "Amazing Spider-Man (1999) #6"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37902",
                  "name": "Amazing Spider-Man (1999) #7"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37904",
                  "name": "Amazing Spider-Man (1999) #9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37988",
                  "name": "Amazing Spider-Man (1999) #10"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/43455",
                  "name": "Amazing Spider-Man (1999) #11"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/41920",
                  "name": "Amazing Spider-Man (1999) #12"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48428",
                  "name": "Amazing Spider-Man (1999) #13"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48429",
                  "name": "Amazing Spider-Man (1999) #14"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48430",
                  "name": "Amazing Spider-Man (1999) #15"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48431",
                  "name": "Amazing Spider-Man (1999) #16"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48433",
                  "name": "Amazing Spider-Man (1999) #18"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48434",
                  "name": "Amazing Spider-Man (1999) #19"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48443",
                  "name": "Amazing Spider-Man (1999) #20"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48444",
                  "name": "Amazing Spider-Man (1999) #21"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/48445",
                  "name": "Amazing Spider-Man (1999) #22"
                }
              ],
              "returned": 20
            },
            "events": {
              "available": 5,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/454/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                  "name": "Civil War"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                  "name": "Dark Reign"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
                  "name": "Maximum Security"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/266",
                  "name": "Other - Evolve or Die"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
                  "name": "Spider-Island"
                }
              ],
              "returned": 5
            },
            "next": null,
            "previous": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
              "name": "The Amazing Spider-Man (1963 - 1998)"
            }
          },
          {
            "id": 2984,
            "title": "Amazing Spider-Man Annual (1964 - 2018)",
            "description": null,
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/2984/amazing_spider-man_annual_1964_-_2018?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 1964,
            "endYear": 2018,
            "rating": "",
            "type": "",
            "modified": "2018-02-17T08:05:01-0500",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/57e44d50686a4",
              "extension": "jpg"
            },
            "creators": {
              "available": 131,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2984/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5388",
                  "name": "Jr",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2112",
                  "name": "Larry Alexander",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/87",
                  "name": "Mark Bagley",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3483",
                  "name": "Mark Beachum",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3535",
                  "name": "Steve Butler",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1827",
                  "name": "John Byrne",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2113",
                  "name": "Joe Agostinelli",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1865",
                  "name": "Diana Albers",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Vc Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
                  "name": "Janice Chiang",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1746",
                  "name": "John Costanza",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1836",
                  "name": "Terry Austin",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2376",
                  "name": "James Brock",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1523",
                  "name": "Vince Colletta",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/954",
                  "name": "Gerry Conway",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2043",
                  "name": "Eliot Brown",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/105",
                  "name": "Sal Buscema",
                  "role": "artist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                  "name": "Virtual Calligr",
                  "role": "other"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/6170",
                  "name": "Olivier Coipel",
                  "role": "penciller"
                }
              ],
              "returned": 20
            },
            "characters": {
              "available": 42,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2984/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                  "name": "Ant-Man (Scott Lang)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010782",
                  "name": "Ben Urich"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010325",
                  "name": "Betty Brant"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
                  "name": "Black Panther"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                  "name": "Captain America"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011095",
                  "name": "Captain Marvel (Monica Rambeau)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009234",
                  "name": "Chameleon"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010774",
                  "name": "Daily Bugle"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
                  "name": "Daredevil"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009276",
                  "name": "Doctor Octopus"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                  "name": "Doctor Strange"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009287",
                  "name": "Electro"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009297",
                  "name": "Falcon"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
                  "name": "Fantastic Four"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009320",
                  "name": "Giant Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009619",
                  "name": "Gwen Stacy"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009486",
                  "name": "Harry Osborn"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011300",
                  "name": "High Evolutionary"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                  "name": "Hulk"
                }
              ],
              "returned": 20
            },
            "stories": {
              "available": 125,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2984/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35376",
                  "name": "Amazing Spider-Man Annual (1964) #1",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35377",
                  "name": "The Sinister Six!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35378",
                  "name": "Interior #35378",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35379",
                  "name": "The Secrets of Spider-Man",
                  "type": ""
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35380",
                  "name": "How Stan Lee and Steve Ditko Create Spider-Man!",
                  "type": ""
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35381",
                  "name": "Cover #35381",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35382",
                  "name": "Interior #35382",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35383",
                  "name": "Cover #35383",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35384",
                  "name": "Spawn of the Spider",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35385",
                  "name": "Chaos At the Coffee Bean!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35386",
                  "name": "Cover #35386",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35387",
                  "name": "The Gentleman's Name is Hulk [frame sequence]",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35388",
                  "name": "The Gentleman's Name Is Hulk",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35389",
                  "name": "[The Fight and the Fury] [no title in this reprint]",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35390",
                  "name": "Cover #35390",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35391",
                  "name": "The Arms of Doctor Octopus",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35392",
                  "name": "A Gallery of Spider-Man's Most Famous Foes!",
                  "type": "pinup"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35393",
                  "name": "Peter Parker's Pad!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35394",
                  "name": "Cover #35394",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/35395",
                  "name": "[Bend Sinister]",
                  "type": "interiorStory"
                }
              ],
              "returned": 20
            },
            "comics": {
              "available": 30,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2984/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16883",
                  "name": "Amazing Spider-Man Annual (1964) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16894",
                  "name": "Amazing Spider-Man Annual (1964) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
                  "name": "Amazing Spider-Man Annual (1964) #3"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16905",
                  "name": "Amazing Spider-Man Annual (1964) #4"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16906",
                  "name": "Amazing Spider-Man Annual (1964) #5"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16907",
                  "name": "Amazing Spider-Man Annual (1964) #6"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16908",
                  "name": "Amazing Spider-Man Annual (1964) #7"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16909",
                  "name": "Amazing Spider-Man Annual (1964) #8"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16910",
                  "name": "Amazing Spider-Man Annual (1964) #9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16884",
                  "name": "Amazing Spider-Man Annual (1964) #10"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16885",
                  "name": "Amazing Spider-Man Annual (1964) #11"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16886",
                  "name": "Amazing Spider-Man Annual (1964) #12"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16887",
                  "name": "Amazing Spider-Man Annual (1964) #13"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16888",
                  "name": "Amazing Spider-Man Annual (1964) #14"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16889",
                  "name": "Amazing Spider-Man Annual (1964) #15"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16890",
                  "name": "Amazing Spider-Man Annual (1964) #16"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16891",
                  "name": "Amazing Spider-Man Annual (1964) #17"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16892",
                  "name": "Amazing Spider-Man Annual (1964) #18"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16893",
                  "name": "Amazing Spider-Man Annual (1964) #19"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/16895",
                  "name": "Amazing Spider-Man Annual (1964) #20"
                }
              ],
              "returned": 20
            },
            "events": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/2984/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
                  "name": "Atlantis Attacks"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
                  "name": "Evolutionary War"
                }
              ],
              "returned": 2
            },
            "next": null,
            "previous": null
          },
          {
            "id": 318,
            "title": "Amazing Spider-Man Vol. 6 (2004)",
            "description": null,
            "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/318/amazing_spider-man_vol_6_2004?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 2004,
            "endYear": 2004,
            "rating": "MARVEL PSR",
            "type": "collection",
            "modified": "-0001-11-30T00:00:00-0500",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/4bb50cfbef02e",
              "extension": "jpg"
            },
            "creators": {
              "available": 14,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/318/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                  "name": "Axel Alonso",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/3635",
                  "name": "Joe Quesada",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11559",
                  "name": "Jeff Scott Campbell",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/212",
                  "name": "Jason Pearson",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
                  "name": "Vc Randy Gentile",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/361",
                  "name": "Cory Petit",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8429",
                  "name": "Dave Sharpe",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/362",
                  "name": "Scott Hanna",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
                  "name": "Stan Lee",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4",
                  "name": "J. Michael Straczynski",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                  "name": "Matt Milla",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4207",
                  "name": "Avalon Studio",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13196",
                  "name": "John Romita Jr.",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13272",
                  "name": "John Romita Sr.",
                  "role": "penciler"
                }
              ],
              "returned": 14
            },
            "characters": {
              "available": 13,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/318/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009489",
                  "name": "Ben Parker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009276",
                  "name": "Doctor Octopus"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                  "name": "Doctor Strange"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009280",
                  "name": "Dormammu"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                  "name": "Mary Jane Watson"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009490",
                  "name": "May Parker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
                  "name": "Mr. Fantastic"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009325",
                  "name": "Norman Osborn"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009491",
                  "name": "Peter Parker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                  "name": "Spider-Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                  "name": "Thor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009692",
                  "name": "Toxin (Eddie Brock)"
                }
              ],
              "returned": 13
            },
            "stories": {
              "available": 8,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/318/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/418",
                  "name": "Peter spends his birthday as Spidey fighting an inter-dimensional threat that’s descended on Manhattan. Alongside a who’s who of",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/419",
                  "name": "Peter spends his birthday as Spidey fighting an inter-dimensional threat that’s descended on Manhattan. Alongside a who’s who of",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1018",
                  "name": "Amazing Spider-Man (1999) #500",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1019",
                  "name": "Interior #1019",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1020",
                  "name": "Amazing Spider-Man (1999) #501",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1021",
                  "name": "Interior #1021",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1022",
                  "name": "Amazing Spider-Man (1999) #502",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/1023",
                  "name": "Interior #1023",
                  "type": "interiorStory"
                }
              ],
              "returned": 8
            },
            "comics": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/318/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/1262",
                  "name": "Amazing Spider-Man Vol. 6 (Trade Paperback)"
                }
              ],
              "returned": 1
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/318/events",
              "items": [],
              "returned": 0
            },
            "next": null,
            "previous": null
          },
          {
            "id": 14779,
            "title": "Art of Marvel Studios TPB Slipcase (2011 - Present)",
            "description": null,
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/14779/art_of_marvel_studios_tpb_slipcase_2011_-_present?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 2011,
            "endYear": 2099,
            "rating": "",
            "type": "",
            "modified": "2012-06-22T18:06:00-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
              "extension": "jpg"
            },
            "creators": {
              "available": 4,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/14779/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/7639",
                  "name": "John Barber",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/707",
                  "name": "Matt Manning",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10363",
                  "name": "John Rhett Thomas",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/7502",
                  "name": "RYAN MEINERDING",
                  "role": "penciller (cover)"
                }
              ],
              "returned": 4
            },
            "characters": {
              "available": 4,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/14779/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                  "name": "Captain America"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009538",
                  "name": "Iron Patriot (James Rhodes)"
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
              "collectionURI": "http://gateway.marvel.com/v1/public/series/14779/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/90559",
                  "name": "Cover #90559",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/90560",
                  "name": "Interior #90560",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "comics": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/14779/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/39896",
                  "name": "Art of Marvel Studios TPB Slipcase (Hardcover)"
                }
              ],
              "returned": 1
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/14779/events",
              "items": [],
              "returned": 0
            },
            "next": null,
            "previous": null
          },
          {
            "id": 9858,
            "title": "Astonishing Thor (2010)",
            "description": null,
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9858",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/series/9858/astonishing_thor_2010?utm_campaign=apiRef&utm_source=9d919d14053c4677a44d43af4024d3d1"
              }
            ],
            "startYear": 2010,
            "endYear": 2010,
            "rating": "",
            "type": "",
            "modified": "2011-07-11T14:51:07-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/b0/4c64691960181",
              "extension": "jpg"
            },
            "creators": {
              "available": 5,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9858/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8204",
                  "name": "Charlie Beckerman",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1052",
                  "name": "Mike Choi",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/649",
                  "name": "Ed Mcguinness",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/182",
                  "name": "Esad Ribic",
                  "role": "penciler"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/418",
                  "name": "Rob Rodi",
                  "role": "writer"
                }
              ],
              "returned": 5
            },
            "characters": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9858/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011060",
                  "name": "Ego"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                  "name": "Thor"
                }
              ],
              "returned": 2
            },
            "stories": {
              "available": 12,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9858/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73874",
                  "name": "Cover #73874",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73877",
                  "name": "Interior #73877",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73878",
                  "name": "Cover #73878  ",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73880",
                  "name": "Interior #73880   ",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73885",
                  "name": "Astonishing Thor #3",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73887",
                  "name": "ASTONISHING THOR #4",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73889",
                  "name": "Astonishing Thor #4",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73890",
                  "name": "Cover #73890",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73892",
                  "name": "Interior #73892",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/75712",
                  "name": "Astonishing Thor #1 Foilogram Variant ",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/75713",
                  "name": "Interior #75713",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/89934",
                  "name": "Astonishing Thor #3",
                  "type": "cover"
                }
              ],
              "returned": 12
            },
            "comics": {
              "available": 6,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9858/comics",
              "items": [
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
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/32778",
                  "name": "Astonishing Thor (2010) #5"
                }
              ],
              "returned": 6
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/series/9858/events",
              "items": [],
              "returned": 0
            },
            "next": null,
            "previous": null
          }
        ]
      }
    }
  }, action) => {
  switch (action.type) {
    case 'REQUEST_SERIES': {
      return {
        isFetching: true
      }
    }
    case 'RECEIVE_SERIES': {
      return {
        isFetching: false,
        response: action.response
      }
    }
    default:
      return state;
  }
}

export default seriesReducer
