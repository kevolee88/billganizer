import React, { Component } from "react";
import InputField from "../../components/InputField";
import SaveBillButton from "./SaveBillButton";

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
