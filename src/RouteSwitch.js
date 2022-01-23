import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import ProductPage from "./Components/ProductPage";

import CategoryPage from "./Components/CategoryPage";
const RouteSwitch = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/nvidia-shop" element={<Homepage />} />
        <Route path="/shop" element={<CategoryPage />} />
        <Route path="/shop/products/:productId" element={<ProductPage />} />
        <Route path="/shop/:categoryId" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
