import React, { useContext } from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { logOut } from "../Authentication/AuthManager";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);

  const handleSignOut = () => {
    logOut().then((response) => {
      // setUser(response);
      setLoggedinUser(response);
    });
  };
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">
          <p>Shop</p>
        </Link>
        <Link to="/shop/reviewOrder">
          <p>Order review</p>
        </Link>
        <Link to="/manage">
          <p>Manage Inventory</p>
        </Link>
        <Link to="/login">
          <p>login</p>
        </Link>
        <p onClick={handleSignOut} style={{ color: "white" }}>
          Sign Out
        </p>
      </nav>
    </div>
  );
};

export default Header;
