import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardColumns } from 'reactstrap';

export default class Comics extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
      prevSuperhero: '',
      comics: {}
    }
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  static getDerivedStateFromProps() {
    if (this.props.superhero !== this.state.prevSuperhero) {
      fetch(`${this.props.endpoint}/${this.props.id}/comics?limit=6&apikey=${this.props.apikey}`)
        .then(res => res.json())
        .then(jsonData => {
          return {
            prevSuperhero: this.props.superhero,
            comics: jsonData
          }
        }).catch(err => console.err('Error:', err));
    }
    return null;
  }

  render() {
    if (this.state.collapsed) {
      return (
        <>
          <h2><a onClick={this.handleClick} href="/">Comics</a></h2>
          <hr />
        </>
      )
    } else {
      return (
        <>
          <h2><a href="/" onClick={this.handleClick}>Comics</a></h2>
          <p>A sampling of comics in which {this.props.superhero} makes an appearance.</p>
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
