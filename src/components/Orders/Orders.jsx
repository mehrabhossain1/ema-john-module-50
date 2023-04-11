import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();
  console.log("7", cart);

  return (
    <div className="shop-container">
      <div className="products-container">
        <h4>Orders Page: {cart.length}</h4>
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
