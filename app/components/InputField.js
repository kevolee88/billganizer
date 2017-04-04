import React, { PropTypes } from "react";

const InputField = ({labelText, inputType, inputId, name, onChange}) => {

  return (
    <div className="form-group">
      <label htmlFor={inputId} className="col-2 col-form-label">{labelText}</label>
      <div className="col-10">
        <input onChange={onChange} className="form-control" type={inputType}  id={inputId} name={name} />
      </div>
    </div>
  );
}

// Header.propTypes = {
//   title: PropTypes.string
// }
export default InputField;
