import React from "react";
import PropTypes from "prop-types";

function Header({name}) {
    return (
        <header>
          <h1>{name && 'привет' + name}</h1>
        </header>
      )
}

Header.propTypes = {
    name: PropTypes.string
};

export default Header;