import allProducts from "../data/allProducts";
import { useParams } from "react-router-dom";
import { React } from "react";
import { Button } from "@mui/material";
import "./ProductPage.css";

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
    <div className="productPageWrapper">
      <b>{product.name}</b>
      <br />${product.price}
      <br />
      <Button
        onClick={handleAddToCard}
        color="success"
        variant="contained"
        size="large"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductPage;
