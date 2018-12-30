import React, { Component } from "react";
import Practice from "./practice";

class Practices extends Component {
  state = {};
  render() {
    const { practices, onFetchPractice } = this.props;
    return (
      <div className="list-group">
        {practices.map(practice => (
          <Practice
            key={practice.uid}
            practice={practice}
            onFetchPractice={onFetchPractice}
          />
        ))}
      </div>
    );
  }
}

export default Practices;
