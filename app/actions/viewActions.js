import dispatcher from '../dispatcher';
import * as databaseClient from '../util/databaseClient';

export function getBills() {
  dispatcher.dispatch({
    type: 'GETTING_BILLS'
  });

  databaseClient.getAllBillsDb();
}
