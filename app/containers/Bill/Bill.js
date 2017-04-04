import React, { Component } from "react";

export default class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    //bind

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="dash-head">
              <h1>{this.props.params.bill}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
