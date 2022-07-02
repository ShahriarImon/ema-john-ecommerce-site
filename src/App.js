import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import fakeData from "./fakeData/products.json";
import Container from "@mui/material/Container";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

export const CartContext = createContext();
export const ProductsContext = createContext();
function App() {
  const first20 = fakeData.slice(0, 40);
  const [products, setProducts] = useState(first20);
  // console.log(products);
  let [cart, setCart] = useState([]);

  return (
    <Container>
      <ProductsContext.Provider value={[products, setProducts]}>
        <CartContext.Provider value={[cart, setCart]}>
          <Router>
            <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/shop"} element={<Shop></Shop>}></Route>
              <Route
                path={"/shop/placeOrder"}
                element={<PlaceOrder></PlaceOrder>}
              ></Route>
              <Route path={"*"} element={<Home />}></Route>
            </Routes>
          </Router>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </Container>
  );
}

export default App;
