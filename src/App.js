import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import fakeData from "./fakeData/products.json";
import Container from "@mui/material/Container";

import ReviewOrder from "./components/ReviewOrder/ReviewOrder";

import Shipment from "./components/Shipment/Shipment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Auth from "./components/Authentication/Auth";

export const CartContext = createContext();
export const ProductsContext = createContext();
export const UserContext = createContext();
function App() {
  const first20 = fakeData.slice(0, 40);
  const [products, setProducts] = useState(first20);
  // console.log(products);
  let [cart, setCart] = useState([]);
  let [loggedInUser, setLoggedInUser] = useState([]);

  return (
    // <Container>
    <ProductsContext.Provider value={[products, setProducts]}>
      <CartContext.Provider value={[cart, setCart]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/shop"} element={<Shop />} />
              <Route path="/login" element={<Auth />} />
              <Route
                path={"/shop/shipment"}
                element={
                  <PrivateRoute>
                    <Shipment />
                  </PrivateRoute>
                }
              ></Route>
              <Route path={"/shop"} element={<Shop />} />
              <Route
                path={"/shop/reviewOrder"}
                element={<ReviewOrder></ReviewOrder>}
              ></Route>
              {/* <Route path={"*"} element={<Home />} /> */}
            </Routes>
          </Router>
        </UserContext.Provider>
      </CartContext.Provider>
    </ProductsContext.Provider>
    // </Container>
  );
}

export default App;
