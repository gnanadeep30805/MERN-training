import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";

function EditProduct() {
  var params = useParams();
  var navigate = useNavigate();
  var id = params.id;

  var titleState = useState("");
  var priceState = useState("");

  var title = titleState[0];
  var setTitle = titleState[1];

  var price = priceState[0];
  var setPrice = priceState[1];
// The useEffect hook is used to perform side effects in functional components.
//  In this case, it is used to fetch the product details from the API when the 
// component mounts. The getProductById method from ProductService is called with 
// the product ID, and the response is used to set the title and price state variables.
//  If there is an error during the API call, it is logged to the console.
// The useEffect hook takes a function as its first argument, which is executed after the
//  component renders.
//[id]): The second argument is an array of dependencies, which in this case contains the 
// id variable.  This means that the effect will only run when the id variable changes. 
// Since the id is  obtained from the URL parameters, it will be set when the component
//  mounts, and the effect  will run to fetch the product details.
  useEffect(function () {
    ProductService.getProductById(id)
      .then(function (response) {
        setTitle(response.data.title);
        setPrice(response.data.price);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

// This function is called when the form is submitted. It prevents the default form
// submission behavior, creates a product object with the title and price, and then
// calls the updateProduct method from ProductService to send the updated data to the 
// backend API.
// If the product is updated successfully, it shows an alert and navigates back to the home page. 
// If there is an error, it logs the error to the console.
// The updateProduct function is responsible for handling the form submission when the  
// user clicks the "Update" button. It takes an event object (e) as a parameter, which is
// used to prevent the default form submission behavior. The function then creates a product
// object with the current values of the title and price state variables. It calls the updateProduct method from ProductService, passing the product ID and the product object as arguments. If the product is updated successfully, it displays an alert message and navigates back to the home page using the navigate function. If there is an error during the API call, it logs the error to the console.
  
//saveProduct(e) : This is the function that will be called when the form is submitted.
// e.preventDefault(); is used to prevent the default behavior of the form submission, 
// which would typically cause a page reload. By calling e.preventDefault(), 
// we can handle the form submission in our own way without triggering a page refresh.
function updateProduct(e) {
    e.preventDefault();

    var product = {
      title: title,
      price: price
    };

    ProductService.updateProduct(id, product)
      .then(function () {
        alert("Product updated");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
/*
<form onSubmit={updateProduct}>
        <input
          type="text"
          value={title}
          onChange={function (e) { setTitle(e.target.value); }} // The onChange event handler is used to 
          // update the title state  variable whenever the user types in the input field.
        />
        // The value attribute of the input field is set to the title state variable, which means 
        // that the input field will display the current value of the title.
        //  When the user types in the input field, the onChange event is triggered, and 
        // the setTitle function is called with the new value (e.target.value) to update the 
        // title state variable. This allows for two-way data binding between the input 
        // field and the title state variable.
*/
  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>

      <form onSubmit={updateProduct}>
        <input
          type="text"
          value={title}
          onChange={function (e) { setTitle(e.target.value); }}
        />
        <br /><br />

        <input
          type="number"
          value={price}
          onChange={function (e) { setPrice(e.target.value); }}
        />
        <br /><br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditProduct;