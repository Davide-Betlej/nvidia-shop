import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import ProductPage from "./Components/ProductPage";
import CategoryPage from "./Components/CategoryPage";
import { React, useState } from "react";
import allProducts from "./data/allProducts";
const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);
  const { productId } = useParams();

  const product = allProducts.find((product) => product.id === productId);

  const handleAddToCard = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = cartItems.find(
        (product) => product.id === clickedItem.id
      );

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, ammount: item.ammount + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, ammount: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (clickedItem) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (clickedItem.id === item.id) {
          if (item.ammount === 1) return ack;
          return [...ack, { ...item, ammount: item.ammount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };
  const calculateTotal = (items) => {
    return items.reduce((ack, item) => ack + item.ammount * item.price, 0);
  };

  const getTotalItems = (items) => {
    return items.reduce((ack, item) => ack + item.ammount, 0);
  };

  return (
    <BrowserRouter>
      <Nav
        cartItems={cartItems}
        handleAddToCard={handleAddToCard}
        getTotalItems={getTotalItems}
        handleRemoveFromCart={handleRemoveFromCart}
        calculateTotal={calculateTotal}
      />
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
