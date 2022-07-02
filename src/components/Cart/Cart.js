import React, { useContext } from "react";
import Product from "../Product/Product";
import "./Cart.css";
import { Link } from "react-router-dom";
import ReviewOrder from "../ReviewOrder/ReviewOrder";
import { CartContext } from "../../App";

const Cart = (props) => {
  let [cart, setCart] = useContext(CartContext);
  const subTotal = cart.reduce(
    (total, product) => total + product.count * product.price,
    0
  );
  const noOfOrderedItem = cart.reduce(
    (total, product) => total + product.count,
    0
  );
  const total = Number(subTotal.toFixed(2));
  let shipping = 0;
  if (total < 15 && total > 0) {
    shipping = 14.99;
  } else if (total < 35 && total > 15) {
    shipping = 4.99;
  } else if (total > 35) {
    shipping = 0;
  }

  let tax = Number((total * 0.15).toFixed(2));
  let subGrandTotal = total + shipping + tax;
  const grandTotal = Number(subGrandTotal.toFixed(2));

  return (
    <div>
      <h4>Order summery</h4>
      <div className="cartAddedItem">
        Items:
        <div className="cartAddedImg">
          {cart.map((element) => (
            <figure className="img">
              <abbr title="click the item to remove">
                <img
                  src={element.img}
                  alt=""
                  onClick={() => {
                    props.handleRemoveFromCartBtn(element);
                  }}
                />
              </abbr>
              <figcaption style={{ textAlign: "center" }}>
                <small> {element.count}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <p>
        Items ordered: <strong>{noOfOrderedItem}</strong>
      </p>
      <p>
        Product price: <strong>{total}</strong>
      </p>
      <p>
        Shipping & Handling: <strong>{shipping}</strong>{" "}
      </p>
      <p>
        Estimated Tax(15%): <strong>{tax}</strong>
      </p>
      <p>
        Order total: <strong>{grandTotal}</strong>
      </p>
      <Link to="/shop/placeOrder">
        <button
          className="addCartBtn"
          //   onClick={() => {
          //     props.orderTaken({ cart });
          //   }}
        >
          Place Order
        </button>
      </Link>
    </div>
  );
};

export default Cart;
