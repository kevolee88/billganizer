import React, { PropTypes } from "react";

const Header = ({title}) => {
  return (
    <header>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">{title}</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><button type="button" className="btn btn-default navbar-btn">Sign in</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Header.propTypes = {
//   title: PropTypes.string
// }
export default Header;
