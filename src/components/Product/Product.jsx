import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, price, seller, ratings, name } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
    </div>
  );
};

export default Product;
