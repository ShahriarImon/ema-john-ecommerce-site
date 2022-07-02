import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const {
    name,
    key,
    img,
    price,
    seller,
    features,
    stock,
    star,
    starCount,
    url,
  } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>

      <div className="product-details">
        <div className="product-name">
          <Link to="/shop/haha">
            <p>{name}</p>
          </Link>
        </div>
        <div>
          <small>by: {seller}</small>
          <br />
        </div>
        <div className="product-desc">
          <div className="product-desc-left">
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button
              className="addCartBtn"
              onClick={() => props.handleAddCartBtn(props.product)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
            </button>
          </div>
          <div className="product-desc-right">
            <p>{star}</p>
            <h3>Features:</h3>
            <ul>
              {features.map((element) => (
                <li className="features-list">
                  {element.description} : <strong>{element.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
