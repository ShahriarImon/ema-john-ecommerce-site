import React from "react";
import "./PlaceOrder.css";
import congrats from "../../images/giphy.gif";

const PlaceOrder = () => {
  localStorage.removeItem("key");

  return (
    <div>
      <img src={congrats} alt="" />
    </div>
  );
};

export default PlaceOrder;
