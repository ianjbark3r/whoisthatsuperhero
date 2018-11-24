import React from 'react';

export default class Series extends React.Component {
  render() {
    return (
      <>
        <h2>Series</h2>
        <p>Here is a list of comic series in which {this.props.name} makes an appearance.</p>
        <ul>
          {this.props.series.items.map((seriesEntry, index) => {
            return (
              <li key={index}>{seriesEntry.name}</li>
            )
          })}
        </ul>
        <hr />
      </>
    )
  }
}
