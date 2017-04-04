import React, { PropTypes } from "react";

const SaveBillButton = ({buttonText, buttonClass, link, onSubmit}) => {
  return (
    <button className={buttonClass} href={link} type="submit" role="button">{buttonText}</button>
  );
}

// Header.propTypes = {
//   title: PropTypes.string
// }
export default SaveBillButton;
