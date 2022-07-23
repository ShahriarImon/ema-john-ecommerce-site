import React from "react";

const ReviewProduct = (props) => {
  const { name, key, img, price } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>

      <div className="product-details">
        <div className="product-name">
          <p>{name}</p>
        </div>
        <br />
        <div className="product-desc">
          <div className="product-desc-left">
            <p>${price}</p>
            <br />
            <br />
            <button
              className="Btn"
              onClick={() => props.handleRemoveFromCartBtn(props.product)}
            >
              {props.btnName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
