import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";
// This component allows users to add a new product by filling out a form and submitting it. 
// It uses the ProductService to send the product data to the backend API and then 
// navigates back to the home page upon successful addition.
function AddProduct() {
  // useNavigate is a hook from react-router-dom that allows us to programmatically
  //  navigate to different routes in our application.
  var navigate = useNavigate();

   // useState is a React hook that allows us to add state to functional components.
   //var titleState = useState(""); // This initializes a state variable called title with an 
   // initial value of an empty string.
     var titleState = useState("");
  //var priceState = useState(""); // This initializes a state variable called price with an 
   // initial value of an empty string.
  var priceState = useState("");

  //var title = titleState[0]; // title is the current value of the title state variable.
  // titleState is an array where the first element is the current value of the 
  // title state variable,
  var title = titleState[0];
  // setTitle is the function that we can use to update the title state variable.
  var setTitle = titleState[1];

  var price = priceState[0];
  var setPrice = priceState[1];

  // This function is called when the form is submitted. It prevents the default form
  // submission behavior, creates a product object with the title and price, and then
  // calls the addProduct method from ProductService to send the data to the backend API.
  // If the product is added successfully, it shows an alert and navigates back to the home page. 
  // If there is an error, it logs the error to the console.
  // The saveProduct function is responsible for handling the form submission when the 
  // user clicks the "Save" button. It takes an event object (e) as a parameter,
  //  which is used to prevent the default form submission behavior. The function then 
  // creates a product object with the current values of the title and price state variables.
  //  It calls the addProduct method from ProductService, passing the product object as an 
  // argument. If the product is added successfully, it displays an alert message and 
  // navigates back to the home page using the navigate function. If there is an error
  //  during the API call, it logs the error to the console.
  //saveProduct(e) : This is the function that will be called when the form is submitted.
  //  It takes an event
  function saveProduct(e) {
    e.preventDefault();

    var product = {
      title: title,
      price: price
    };
   //   .then(function ()// // This is a callback function that will be executed
   //  if the addProduct API call is successful.
       ProductService.addProduct(product)
      .then(function () {
        alert("Product added");
        // After successfully adding the product, we navigate back to the home page ("/").
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
// The return statement contains the JSX that defines the structure of the component's UI.
//   <form onSubmit={saveProduct}> The onSubmit attribute is set to the saveProduct function, 
// which will be called when the form is submitted.

//   onChange={function (e) { setTitle(e.target.value); }} : The onChange event handler is
//  used to update the title state variable whenever the user types in the input field.
  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>
      
      <form onSubmit={saveProduct}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={function (e) { setTitle(e.target.value); }}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={function (e) { setPrice(e.target.value); }}
        />
        <br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddProduct;