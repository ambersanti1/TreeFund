import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Checkout = ({ cartItems }) => {
  const handleCheckout = () => {
    // const user = useSelector((state) => state.auth);
    cartItems = [{id: 1, name: "Nature Savior", description: "10 trees", price: 400}]
    axios
      .post("http://localhost:5000/api/stripe/create-checkout-session", {
        cartItems,
        // userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <button onClick={() => handleCheckout()}>Checkout</button>
    </>
  );
};

export default Checkout;
