import * as serverActions from '../actions/serverActions';

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

export function addBillToDb(bill) {
  let query = r.table('bills').insert(bill);
  ReactRethinkdb.DefaultSession.runQuery(query);
}

export function getAllBillsDb() {
  let query = r.db('react_app').table('bills').between(r.minval, r.maxval);
  ReactRethinkdb.DefaultSession.runQuery(query)
    .then( cursor => { return cursor.toArray(); } )
    .then( result => { serverActions.billsReceived(result); } )
    .catch( e => { serverActions.getBillsFail(e); } );
}
