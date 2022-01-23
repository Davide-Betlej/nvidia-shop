import allProducts from "../data/allProducts";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const product = allProducts.find((product) => product.id === productId);
  return (
    <div>
      {product.name}
      <br></br>
      {product.price}$
    </div>
  );
};

export default ProductPage;
