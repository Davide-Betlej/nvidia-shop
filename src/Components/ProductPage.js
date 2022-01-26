import allProducts from "../data/allProducts";
import { useParams } from "react-router-dom";
import { React } from "react";
import { Button } from "@mui/material";

const ProductPage = (props) => {
  const { cartItems, setCartItems } = props;
  const { productId } = useParams();
  const product = allProducts.find((product) => product.id === productId);

  // DRY, FIND A WAY TO BEAUTIFY THE CODE
  const handleAddToCard = () => {
    setCartItems((prev) => {
      const isItemInCart = cartItems.find(
        (product) => product.id === productId
      );

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === productId ? { ...item, ammount: item.ammount + 1 } : item
        );
      } else {
        return [...prev, { ...product, ammount: 1 }];
      }
    });
  };

  return (
    <div>
      {product.name}
      <br></br>
      {product.price}$<Button onClick={handleAddToCard}>Test</Button>
      {cartItems.map((item) => (
        <div>
          {item.name}, ${item.price}, {item.ammount}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
