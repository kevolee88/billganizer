import dispatcher from '../dispatcher';

export function billsReceived(bills) {
  dispatcher.dispatch({
    type: 'BILLS_RECEIVED',
    bills
  })
}

export function getBillsFail(error) {
  dispatcher.dispatch({
    type: 'GET_BILLS_FAILED',
    error
  });
}
