import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; 
function Products() {
  const [myproducts, setmyproducts] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);
  const getAllProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmyproducts(data);
      });
  };
  
  //function delete
  const deleteProduct = (Product) => {
    Swal.fire({
      title: `Are You Sure to delete${Product.title} ?`,
      showCancelButton:true
    }).then((data)=>{
    if(data.isConfirmed){
      fetch(`https://fakestoreapi.com/products/${Product.id}`, {
        method: "DELETE"
      })
      
        .then((res) => res.json())
        .then((data) => {
          getAllProduct();
        });
    }
    })
    
  
  };

  return (
    <>
      <h1> Products page</h1>
      <Link to="add" className="btn btn-success mt-3">
        Add new product
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {myproducts.map((Product) => {
            return (
              <tr key={Product.id}>
                <td>{Product.id}</td>
                <td>{Product.title.slice(0, 45)}</td>
                <td>{Product.price}</td>
                <td>{Product.description.slice(0, 45)}</td>

                {/* <td>{Product.category}</td> */}

                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => deleteProduct(Product)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${Product.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </Link>
                  <Link to="Edit" className="btn btn-primary btn-sm">
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
