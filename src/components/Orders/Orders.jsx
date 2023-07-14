import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  // console.log("7", savedCart);
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    // console.log(id);
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className='shop-container'>
      <div className='review-container'>
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to='/checkout'>
            <button className='btn-proceed'>Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
