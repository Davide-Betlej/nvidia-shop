import categories from "../data/categories";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import allProducts from "../data//allProducts";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find((category) => category.id === categoryId);
  const [productsByCategory, setProductsByCategory] = useState();

  useEffect(() => {
    if (category) {
      setProductsByCategory(
        allProducts.filter((product) => product.categoryId === category.id)
      );
    }
    if (categoryId === undefined) {
      setProductsByCategory(false);
    }
  }, [categoryId, category]);

  return (
    <div className="shopWrapper">
      <aside className="shopSide">
        <div className="categoryH1">
          <h1>{category ? category.name : "All Products"}</h1>
        </div>
        <ul className="shopCategories">
          {categories.map((category) => (
            <Link to={`/shop/${category.id}`} key={category.id}>
              <li>{category.name}</li>
            </Link>
          ))}
        </ul>
      </aside>
      <div className="productContainer">
        <ul className="productUl">
          {productsByCategory
            ? productsByCategory.map((product) => (
                <li key={product.id} className="productLi">
                  <Link to={`/shop/products/${product.id}`}>
                    <div className="productImg">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="productName">{product.name}</div>
                    <div className="productPrice">${product.price}</div>
                  </Link>
                </li>
              ))
            : allProducts.map((product) => (
                <li key={product.id} className="productLi">
                  <Link to={`/shop/products/${product.id}`}>
                    <div className="productImg">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="productName">{product.name}</div>
                    <div className="productPrice">${product.price}</div>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
