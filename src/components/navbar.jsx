import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { onFetchPractices } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Find Doctors and Hospitals near you
        </span>

        <button onClick={onFetchPractices} className="btn btn-primary btn-sm">
          Find Practices
        </button>
      </nav>
    );
  }
}

export default NavBar;
