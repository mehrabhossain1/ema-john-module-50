import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const products = useLoaderData();
  console.log("7", products);

  return (
    <div className="shop-container">
      <div className="products-container">
        <h4>Orders Page: {products.length}</h4>
      </div>
      <div className="cart-container">
        <Cart cart={[]} />
      </div>
    </div>
  );
};

export default Orders;
