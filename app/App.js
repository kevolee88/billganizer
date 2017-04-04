import React, { Component } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AddBill from "./containers/AddBill/AddBill";
import Bill from "./containers/Bill/Bill";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Wasssup",
    };

  }

  render() {
    let { title } = this.state;
    return (
      <div>
        <Header title={title} />
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
