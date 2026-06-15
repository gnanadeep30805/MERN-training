import React, { Component } from "react";
import ProductService from "../services/ProductService";
//(UPDATE)
class EditProduct extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      price: ""
    };
  }
//  Lifecycle method
// This method is called after the component is rendered for the first time.
// We will call the API to get the product details in this method.
  componentDidMount() {
    var id = this.props.params.id;

    ProductService.getProductById(id)
      .then(this.loadProduct.bind(this));
  }
// loadProduct() method is used to load the product details received from the API in the
//   state of the component.
// We will use the product details from the state to display in the input fields and update 
// the product details.
  loadProduct(response) {
    this.setState({
      id: response.data.id,
      title: response.data.title,
      price: response.data.price
    });
  }
// handleChange() method is used to update the state of the component when the user types
//  in the input fields.
// The name attribute of the input fields is used to identify which field is being updated.

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
// updateProduct() method is used to update the product details entered by the user in the input fields.
// We create a product object with the title and price from the state.
// We call the updateProduct() method of the ProductService to update the product details in the backend.
// We handle the success response from the API in the handleSuccess() method.

  updateProduct() {
    var product = {
      title: this.state.title,
      price: this.state.price
    };

    ProductService.updateProduct(this.state.id, product)
      .then(this.handleSuccess.bind(this));
  }
// handleSuccess() method is used to handle the success response from the API after updating the product details in the backend.
// We show an alert message to the user that the product is updated successfully.
// We navigate to the product list page using this.props.navigate("/") after updating 
// the product successfully.
// this.props.navigate("/"); is used to navigate to the product list page after updating 
// the product details successfully.
  handleSuccess() {
    alert("Product Updated Successfully");
    this.props.navigate("/");
  }
//onChange={this.handleChange.bind(this)} is used to update the state of the component when the user types in the input fields.
// value={this.state.title} and value={this.state.price} is used to display the product
//  details in the input fields and update the product details.
  render() {
    return (
      <div>
        <h2>Edit Product</h2>

        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
        />

        <br /><br />

        <input
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.handleChange.bind(this)}
        />

        <br /><br />

        <button onClick={this.updateProduct.bind(this)}>
          Update
        </button>
      </div>
    );
  }
}

export default EditProduct;