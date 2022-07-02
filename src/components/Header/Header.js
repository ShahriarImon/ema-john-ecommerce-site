import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">
          <p>Shop</p>
        </Link>
        <Link to="/review">
          <p>Order review</p>
        </Link>
        <Link to="/manage">
          <p>Manage Inventory</p>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
