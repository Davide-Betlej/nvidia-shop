import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import ProductPage from "./Components/ProductPage";
import CategoryPage from "./Components/CategoryPage";
import { React, useState } from "react";

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/nvidia-shop" element={<Homepage />} />
        <Route path="/shop" element={<CategoryPage />} />
        <Route
          path="/shop/products/:productId"
          element={
            <ProductPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/shop/:categoryId" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
