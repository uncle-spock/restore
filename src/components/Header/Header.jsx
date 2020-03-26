import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = ({ children }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        ReStore
      </Link>

      <div className="header-content">
        <i className="cart-icon fa fa-shopping-cart"></i>

        <span className="cart-info">5 items ($200)</span>
      </div>
    </nav>
  );
};

export default Header;
