import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function View() {
  let { productID } = useParams();
    const [myview, setmyview] = useState();
    useEffect((
    ) => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((res) => res.json())
            .then((product) => {
                console.log(product);
                setmyview(product);
            })
      
    }, []);
  return (
    <>
      <h1>detailes of page{productID}</h1>
      {myview ? (
  <div>
     <p>{myview.id}</p>
            <p>{myview.title}</p>
            <p>{myview.price}</p>
            <p>{myview.description}</p>
            <p>{myview.category}</p>
            <img src={myview.image} width="200"/>
            <p>{myview.rating.rate}</p>
            <p>{myview.rating.count}</p>


            
  </div>
) : (
  <p>loadindg.......</p>
)}
      
    </>
  );
}
export default View;
//  <p>{product.id}</p>
//             <h1>{product.title}</h1>
//             <p>{product.price}</h1>
//             <p>{product.description}</p> 