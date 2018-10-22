import React, { Component } from 'react';

class Like extends Component {
  state = {};
  render() {
    return (
      <i
        className={this.getLikeClasses()}
        aria-hidden="true"
        onClick={this.props.onLike}
        style={{ cursor: 'pointer' }}
      />
    );
  }

  getLikeClasses = () => {
    let classes = 'fa ';
    classes += this.props.liked === true ? 'fa-thumbs-up' : 'fa-thumbs-o-up';
    return classes;
  };
}

export default Like;
