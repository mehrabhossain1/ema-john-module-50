import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, price, seller, ratings, name } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
    </div>
  );
};

export default Product;
