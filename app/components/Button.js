import React, { PropTypes } from "react";

const Button = ({buttonText, buttonClass, link}) => {
  return (
    <a className={buttonClass} href={link} role="button">{buttonText}</a>
  );
}

// Header.propTypes = {
//   title: PropTypes.string
// }
export default Button;
