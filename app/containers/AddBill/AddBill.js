import React, { Component } from "react";
import InputField from "../../components/InputField";
import SaveBillButton from "./SaveBillButton";

const ReactRethinkdb = require('react-rethinkdb');
const r = ReactRethinkdb.r;

// Open a react-rethinkdb session (a WebSocket connection to the server)
ReactRethinkdb.DefaultSession.connect({
  host: 'localhost', // hostname of the websocket server
  port: 8015,        // port number of the websocket server
  path: '/db',       // HTTP path to websocket route
  secure: false,     // set true to use secure TLS websockets
  db: 'react_app',   // default database, passed to rethinkdb.connect
});

export default class AddBill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      billName: "",
      billAmount: "",
      billCategory: "",
      billDue: ""
    };

    //bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = r.table('bills').insert(this.state);
    ReactRethinkdb.DefaultSession.runQuery(query);
  }

  render() {
    let title = "Add New Bill";
    return (
      <div className="container">
        <h1>{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField onChange={this.handleChange} labelText="Bill Name" inputType="text" inputId="bill-name" name="billName" />
          <InputField onChange={this.handleChange} labelText="Amount" inputType="text" inputId="amount" name="billAmount" />
          <InputField onChange={this.handleChange} labelText="Category" inputType="text" inputId="category" name="billCategory" />
          <InputField onChange={this.handleChange} labelText="Due Date" inputType="text" inputId="due" name="billDue" />
          <SaveBillButton buttonText="Save Bill" buttonClass="btn btn-primary btn-lg"/>
        </form>
      </div>
    );
  }
}
