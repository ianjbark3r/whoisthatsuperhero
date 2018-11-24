import React from 'react';

export default class Comics extends React.Component {
  render() {
    return (
      <>
        <h2>Comics</h2>
        <p>Here is a list of comics in which {this.props.name} makes an appearance.</p>
        <ul>
          {this.props.comics.items.map((comic, index) => {
            return (
              <li key={index}>{comic.name}</li>
            )
          })}
        </ul>
        <hr />
      </>
    )
  }
}
