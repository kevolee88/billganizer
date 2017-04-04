import React, { PropTypes } from "react";

const Bill = ({billName, billAmount, billCategory, billDue}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="thumbnail">
        <div className="caption">
          <h3>{billName} <span className="small">{billCategory}</span></h3>
          <h1>{billAmount}</h1>
          <p>{billDue}</p>
          <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
        </div>
      </div>
    </div>
  );
}

// Header.propTypes = {
//   title: PropTypes.string
// }
export default Bill;
