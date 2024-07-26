import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function Product() {
  const [products, updateProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    let productlist = await res.json();
    updateProduct(productlist);
  }

  if (products.length == 0) {
    return <h1>WELCOME</h1>;
  }
  return (
    <>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard {...p} key={p.id}></ProductCard>
        ))}
      </div>
    </>
  );
}

export default Product;
