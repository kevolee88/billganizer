import React, { Component } from "react";
import Button from "../../components/Button";
import Bill from "../../components/Bill";
import BillsStore from "../../stores/BillsStore";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Wasssup",
      bills: BillsStore.getAll()
    };
  }

  ComponentWillMount() {
    BillsStore.on('change', () => {
      this.setState({
        bills: BillsStore.getAll()
      });
    });
  }

  render() {
    const { bills } = this.state;

    const BillComponents = bills.map((bills) => {
      return <Bill key={bills.billId} billName={bills.billName} billAmount={bills.billAmount} billCategory={bills.billCategory} billDue={bills.billDue}/>;
    });

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
          {BillComponents}
        </div>
      </div>
    );
  }
}
