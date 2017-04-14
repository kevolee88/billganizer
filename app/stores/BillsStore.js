import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

let _bills = null;

class BillsStore extends EventEmitter {
  getAllBills() {
    return _bills;
  }

  handleActions(action) {
    switch (action.type) {
      case 'GETTING_BILLS':
        console.log("got bills");
        this.emit('change');
        break;
      case 'BILLS_RECEIVED':
        _bills = action.bills;
        this.emit('change');
        break;
      case 'GETTING_BILLS':
        console.log("GET_BILLS_FAILED", action.error);
        this.emit('change');
        break;
      default:
        break;
    }
  }
}

const billsStore = new BillsStore;

dispatcher.register(billsStore.handleActions.bind(billsStore));

export default billsStore;
