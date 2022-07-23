import React, { useContext } from "react";
import "./PlaceOrder.css";
import congrats from "../../images/giphy.gif";
import { CartContext } from "../../App";

const PlaceOrder = () => {
  localStorage.removeItem("key");
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  if (cart.length === 0) {
    return <h1> No order selected</h1>;
  } else {
    return <img src={congrats} alt="" />;
  }
};

export default PlaceOrder;
