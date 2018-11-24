import React from 'react';

export default class Links extends React.Component {
  render() {
    return (
      <>
        <h2>Links</h2>
        <p>Helpful links to more information regarding {this.props.name}</p>
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
