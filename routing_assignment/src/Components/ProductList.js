import React from "react";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <span>{product.name}</span>
          <a href="#">Add to Cart</a>
        </li>
      ))}
    </ul>
  );
};

export default ProductList ;