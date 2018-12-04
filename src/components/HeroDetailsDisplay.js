import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroDetailsDisplay extends Component {
  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>
    } else if (!this.props.isFetching) {
      return (
        <>
          <h1 className="display-1">{this.props.superhero}</h1>
          <hr />
          <p style={{ marginBottom: "1rem" }}><a href="http://marvel.com">{this.props.attributionText}</a></p>
          <p>{this.props.description}</p>
          <hr />
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name,
    attributionText: state.heroInfo.response.attributionText,
    description: state.heroInfo.response.data.results[0].description
  }
}

export default connect(mapStateToProps)(HeroDetailsDisplay)
