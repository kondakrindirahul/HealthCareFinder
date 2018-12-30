import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Practices from "./components/practices";
import PracticeInfo from "./components/practiceInfo";

class App extends Component {
  state = {
    practices: null,
    currentPractice: null,
    lat: null,
    long: null
  };

  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  }

  fetchPractices = () => {
    console.log(this.state.lat, this.state.long);
    fetch(
      "https://api.betterdoctor.com/2016-03-01/practices?location=" +
        this.state.lat.toString() +
        "," +
        this.state.long.toString() +
        ",10&skip=2&limit=10&user_key=6044958ebf5e9617811b3f0b89262809"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          practices: json.data
        });
      });
  };

  fetchPractice = practice => {
    this.setState({
      // this.setState({ arr: [...this.state.arr, 'new item'] });
      currentPractice: practice
    });
  };

  render() {
    const { practices, currentPractice } = this.state;

    if (practices === null) {
      return (
        <React.Fragment>
          <NavBar onFetchPractices={this.fetchPractices} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar onFetchPractices={this.fetchPractices} />
          <div className="row">
            <div className="col-sm-4" id="col1">
              <Practices
                practices={practices}
                onFetchPractice={this.fetchPractice}
              />
            </div>

            <div className="col-sm-8 border rounded" id="col2">
              <PracticeInfo currentPractice={currentPractice} />
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
