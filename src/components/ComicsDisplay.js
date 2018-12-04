import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardTitle, CardText, CardBody, CardColumns } from 'reactstrap';

class ComicsDisplay extends Component {
  render() {
    if (this.props.collapsed) {
      return null
    } else if (!this.props.collapsed && this.props.isFetching) {
      return <p>Loading...</p>
    } else if (!this.props.collapsed && !this.props.isFetching) {
      return (
        <>
          <p>A sampling of comics in which {this.props.superhero} makes an appearance.</p>
          <CardColumns>
            {this.props.response.data.results.map((result, index) => {
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
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name,
    collapsed: state.comics.collapsed,
    isFetching: state.comics.isFetching,
    response: state.comics.response
  }
}

export default connect(mapStateToProps)(ComicsDisplay)
