import React, { Component } from "react";

class Practice extends Component {
  render() {
    const { practice, onFetchPractice } = this.props;

    return (
      // eslint-disable-next-line
      <a
        href="#"
        className="list-group-item"
        onClick={() => onFetchPractice(practice)}
      >
        {practice.name}
      </a>
    );
  }
}

export default Practice;
