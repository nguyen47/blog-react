import React, { Component } from 'react';

class Genre extends Component {
  render() {
    return (
      <ul className="list-group">
        <li
          className="list-group-item"
          onClick={() => this.props.onClickAllGenre()}
          style={{ cursor: 'pointer' }}
        >
          All Categiries
        </li>
        {this.props.getGenres.map((g) => (
          <li
            key={g._id}
            className="list-group-item"
            style={{ cursor: 'pointer' }}
            onClick={() => this.props.onGenreClick(g)}
          >
            {g.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genre;
