import { useContext } from "react";
import { CartContext, ProductsContext } from "../../App";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Product from "../Product/Product";

import "./Shop.css";

const Shop = () => {
  let count = 100;
  // const first20 = fakeData.slice(0, 40)
  // const [products, setProducts] = useState(first20);
  let [cart, setCart] = useContext(CartContext);
  let [products, setProducts] = useContext(ProductsContext);
  console.log(cart, setCart);

  // const orderTaken = (product) => {
  //    localStorage.setItem("key", JSON.stringify(product));
  // };
  const handleAddCartBtn = (product) => {
    let newcart = [];
    let found = cart.find((element) => element.key === product.key);
    console.log(found);
    if (found) {
      count = found.count + 1;
      found.count = count;
      let filtered = cart.filter((element) => element.key !== product.key);
      newcart = [...filtered, found];
    } else {
      product.count = 1;
      newcart = [...cart, product];
    }

    localStorage.setItem("key", JSON.stringify(newcart));
    setCart(newcart);
  };

  const handleRemoveFromCartBtn = (product) => {
    let newCart = cart.filter((element) => element.key !== product.key);
    // console.log('newCart', newCart);
    setCart(newCart);
  };

  // const goReview = (order)=>{
  // }
  return (
    <div>
      <Header></Header>
      <br />
      <br />
      <div className="shop-container">
        <div className="product-container">
          {products.map((element) => (
            <Product
              product={element}
              handleAddCartBtn={handleAddCartBtn}
              key={element.key}
              btnName="Add to cart"
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart
            // TODO:cartBtn is used to dynamic the button name
            cartBtn="Review Order"
            handleRemoveFromCartBtn={handleRemoveFromCartBtn}
            isCartImg={true}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
