import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Checkout = ({ cartItems }) => {

  const handleCheckout = () => {
    axios
      .post("http://localhost:5000/api/stripe/create-checkout-session", {
        cartItems,
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
