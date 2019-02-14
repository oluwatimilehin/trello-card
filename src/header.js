import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <div className="header-box">
      <span className="header-text">{text}</span>
      <span className="icon">
        {" "}
        <i className="fas fa-ellipsis-h" />
      </span>
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
