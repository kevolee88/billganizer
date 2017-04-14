import React, { Component } from "react";
import Button from "../../components/Button";
import Bill from "../../components/Bill";
import BillsStore from "../../stores/BillsStore";
import * as viewActions from "../../actions/viewActions";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Wasssup",
      bills: BillsStore.getAllBills()
    };

    this.handleBillsChange = this.handleBillsChange.bind(this);

    viewActions.getBills();
  }

  componentWillMount() {
    BillsStore.on('change', this.handleBillsChange);
  }

  componentWillUnMount() {
    BillsStore.removeListener('change', this.handleBillsChange);
  }

  handleBillsChange() {
    this.setState({
      bills: BillsStore.getAllBills()
    });
  }

  render() {
    const { bills } = this.state;

    let BillDisplay;

    if (bills) {
      BillDisplay = bills.map((bills) => {
        return <Bill key={bills.id} billName={bills.billName} billAmount={bills.billAmount} billCategory={bills.billCategory} billDue={bills.billDue}/>;
      });
    } else {
      BillDisplay = 'No Bills Found';
    }

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
          {BillDisplay}
        </div>
      </div>
    );
  }
}
