import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";
// The ProductList component is responsible for displaying a list of products fetched from
//  the backend API.
// It uses the ProductService to retrieve the product data and allows users to delete
//  products. The component also provides links to add a new product and edit existing products.
// The useState hook is used to manage the state of the products list. It initializes the
// products state variable as an empty array and provides a setProducts function to update it.
// The useEffect hook is used to fetch the products from the API when the component mounts. 
// 
// 
// The return statement contains the JSX that defines the structure of the component's UI. It displays a heading, a link to add a new product, and a list of products with options to edit or delete each product.

function ProductList() {
  var state = useState([]);
  var products = state[0];
  var setProducts = state[1];

  useEffect(function () {
    loadProducts();
  }, []);

//The loadProducts function is called inside the useEffect hook to make an API call to 
// get all products and update the products state variable with the response data. 
// If there is an error during the API call, it is logged to the console.
  function loadProducts() {
    ProductService.getAllProducts()
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
//The deleteItem function is responsible for deleting a product. It takes the product
//  ID as a parameter, calls the deleteProduct method from ProductService, and if the 
// deletion is successful, it shows an alert and reloads the products list by calling 
// loadProducts again. If there is an error during the API call, it logs the error
//  to the console.
  function deleteItem(id) {
    ProductService.deleteProduct(id)
      .then(function () {
        alert("Product deleted");
        loadProducts();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
// The return statement contains the JSX that defines the structure of the component's UI.
//  It displays a heading, a link to add a new product, and a list of products with 
// options to edit or delete each product.
// The JSX code uses the map function to iterate over the products array and render 
// a list item for each product. Each list item displays the product's title
//  and price, along with links to edit the product and a button to delete the product.
//  The delete button calls the deleteItem function with the product's ID when clicked.

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <Link to="/add">Add Product</Link>

      <ul>
        {products.map(function (product) {
          return (
            <li key={product.id}>
              {product.title} - ${product.price}
              {" | "}
              <Link to={"/edit/" + product.id}>Edit</Link>
              {" | "}
              <button onClick={function () { deleteItem(product.id); }}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;