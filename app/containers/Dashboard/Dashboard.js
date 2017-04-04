import React, { Component } from "react";
import Button from "../../components/Button";
import Bill from "../../components/Bill";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Wasssup",
    };

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="dash-head">
              <h1>This is the Dashboard</h1>
              <Button buttonText="Add New Bill" buttonClass="btn btn-primary btn-lg" link="/#/dashboard/add-bill"/>
            </div>
          </div>
        </div>
        <div className="row">
          <Bill billName="Car Payment" billAmount="$360.20" billCategory="Auto" billDue="1/12/2017"/>
        </div>
      </div>
    );
  }
}
