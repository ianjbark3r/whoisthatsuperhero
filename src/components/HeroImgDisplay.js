import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroImgDisplay extends Component {
  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>
    } else if (!this.props.isFetching) {
      return <img src={`${this.props.path}.${this.props.extension}`} alt={`${this.props.superhero}`} className="img-thumbnail" />
    }
  }
}

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name,
    isFetching: state.heroInfo.isFetching,
    path: state.heroInfo.response.data.results[0].thumbnail.path,
    extension: state.heroInfo.response.data.results[0].thumbnail.extension
  }
}

export default connect(mapStateToProps)(HeroImgDisplay)
