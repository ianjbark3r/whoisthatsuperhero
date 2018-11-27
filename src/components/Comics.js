import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

export default class Comics extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
      comics: {
        data: {
          results: [
            {
              title: '',
              description: '',
              urls: [
                {
                  url: ''
                }
              ],
              thumbnail: {
                path: '',
                extension: ''
              }
            }
          ]
        }
      }
    }
  }

  handleClick(e) {
    e.preventDefault();

    const endpoint = this.props.endpoint;
    const id = this.props.id;
    const apikey = this.props.apikey;

    console.log(`${endpoint}/${id}/comics?limit=9&apikey=${apikey}`);

    fetch(`${endpoint}/${id}/comics?limit=9&apikey=${apikey}`)
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
        console.log(jsonData);
        console.log(this.state.comics);

        this.setState({
          collapsed: !this.state.collapsed,
          comics: jsonData
        }, () => {
          console.log(this.state.comics);
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    if (this.state.collapsed) {
      return (
        <>
          <h2>Comics</h2>
          <button onClick={this.handleClick}>View</button>
        </>
      )
    } else {
      return (
        <>
          <h2>Comics</h2>
          <button onClick={this.handleClick}>Close</button>
          <p>Here is a list of comics in which {this.props.name} makes an appearance.</p>
          <CardDeck>
          {this.state.comics.data.results.map((result, index) => {
              return (
                <Card key={index}>
                  <CardImg top width="100%" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} />
                  <CardBody>
                    <CardTitle>{result.title}</CardTitle>
                    <CardText>{result.description}</CardText>
                    <a href={result.urls[1].url} target="_blank"><Button>View</Button></a>
                  </CardBody>
                </Card>
              )
            })}
          </CardDeck>
          <hr />
        </>
      )
    }
  }
}
