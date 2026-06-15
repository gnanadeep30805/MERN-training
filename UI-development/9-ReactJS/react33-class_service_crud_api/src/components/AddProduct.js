import React, { Component } from "react";
import ProductService from "../services/ProductService";
import { useNavigate } from "react-router-dom";

class AddProduct extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: ""
    };
  }
// handleChange() method is used to update the state of the component when the user types
//  in the input fields.
// The name attribute of the input fields is used to identify which field is being updated.
// The value of the input field is updated in the state using the setState() method.
// [event.target.name]: event.target.value is used to update the state dynamically based 
// on the name of the input field.
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
// saveProduct() method is used to save the product details entered by the user in the input fields.
// We create a product object with the title and price from the state.
// We call the addProduct() method of the ProductService to save the product details in the backend.
// We handle the success response from the API in the handleSuccess() method. 
  saveProduct() {
    var product = {
      title: this.state.title,
      price: this.state.price
    };
// ProductService.addProduct(product) is used to call the API to save the product details in 
// the backend.
    ProductService.addProduct(product)
      .then(this.handleSuccess.bind(this));
  }
// handleSuccess() method is used to handle the success response from the API after saving the product details in the backend.
// We show an alert message to the user that the product is added successfully.
// We navigate to the product list page using this.props.navigate("/") after adding 
// the product successfully.
  handleSuccess() {
    alert("Product Added Successfully");
    this.props.navigate("/");
  }

  render() {
    return (
      <div>
        <h2>Add Product</h2>

        <input
          type="text"
          name="title"
          placeholder="Product Name"
          onChange={this.handleChange.bind(this)}
        />

        <br /><br />

        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={this.handleChange.bind(this)}
        />

        <br /><br />

        <button onClick={this.saveProduct.bind(this)}>
          Save
        </button>
      </div>
    );
  }
}

export default AddProduct;