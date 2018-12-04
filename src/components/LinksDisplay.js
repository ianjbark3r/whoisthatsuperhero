import React, { Component } from 'react';
import { connect } from 'react-redux';

class LinksDisplay extends Component {
  render() {
    return (
      <>
        <p>Helpful links to more information regarding {this.props.superhero}</p>
        {this.props.urls.map((url, index) => {
          return (
            <a href={url.url}>
              <button className="btn btn-outline-info" key={index}>{url.type}</button>
            </a>
          )
        })}
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    superhero: state.superhero.className,
    urls: state.heroInfo.response.data.results[0].urls
  }
}

export default connect(mapStateToProps)(LinksDisplay)
