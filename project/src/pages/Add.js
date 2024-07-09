import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "content-Type": "Application/json",
      },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };

  return (
    <>
      <h1>Add product</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>

          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default Add;
