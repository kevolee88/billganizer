import { EventEmitter } from 'events';

class BillsStore extends EventEmitter {
  constructor() {
    super()

    this.bills = [
      {
        billName: "Car Payment",
        billAmount: "$360.20",
        billCategory: "Auto",
        billDue: "1/12/2017",
        billId: "1"
      },
      {
        billName: "Cox",
        billAmount: "$93.00",
        billCategory: "Utility",
        billDue: "1/8/2017",
        billId: "2"
      },
      {
        billName: "AT&T",
        billAmount: "$200.00",
        billCategory: "Phone",
        billDue: "1/1/2017",
        billId: "3"
      },
      {
        billName: "Water",
        billAmount: "$45.00",
        billCategory: "Water",
        billDue: "1/6/2017",
        billId: "4"
      }
    ];
  }

  createBill(billName, billAmount, billCategory, billDue) {
    const id = Date.now();
    this.bills.push({
      id,
      billName,
      billAmount,
      billCategory,
      billDue,
      complete: false
    });
    this.emit('change');
  }

  getAll() {
    return this.bills;
  }
}

const billsStore = new BillsStore;
window.billsStore = billsStore;

export default billsStore;
