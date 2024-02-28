import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Packages</h1>
      <ul>
        {data.map((product) => (
          <div key={product.id} >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Checkout cartItems = {[product]}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
