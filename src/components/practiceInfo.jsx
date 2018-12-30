import React, { Component } from "react";

class PracticeInfo extends Component {
  render() {
    const { currentPractice } = this.props;

    if (currentPractice === null) {
      return null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <b>Name: </b>
          </div>
          <div className="col-sm-10">
            <p>{currentPractice.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <b>Address: </b>
          </div>
          <div className="col-sm-10">
            <p>
              {currentPractice.visit_address.street},{" "}
              {currentPractice.visit_address.city},{" "}
              {currentPractice.visit_address.state},{" "}
              {currentPractice.visit_address.zip}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <b>Contact: </b>
          </div>
          <div className="col-sm-10">
            <p>{currentPractice.phones[0].number}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <b>Doctors: </b>
          </div>
          <div className="list-group col-sm-10">
            <ul>
              {currentPractice.doctors.map(doctor => (
                <li className="list-group-item" key="{doctor.profile.slug}">
                  {doctor.profile.first_name} {doctor.profile.last_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PracticeInfo;
