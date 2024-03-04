import axios from "axios";
import React from "react";

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
      <button onClick={() => handleCheckout()}>Donate</button>
    </>
  );
};

export default Checkout;
