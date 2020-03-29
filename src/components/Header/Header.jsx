import React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "../../constants";

import "./header.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to={routeNames.HOME}>
        ReStore
      </Link>

      <Link className="header-content" to={routeNames.CART}>
        <i className="cart-icon fa fa-shopping-cart"></i>

        <span className="cart-info">5 items ($200)</span>
      </Link>
    </nav>
  );
};

export default Header;
