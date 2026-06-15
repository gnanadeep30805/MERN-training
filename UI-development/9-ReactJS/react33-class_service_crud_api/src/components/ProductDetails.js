import React, { Component } from "react";
import ProductService from "../services/ProductService";
//(READ BY ID)
//(READ BY ID + NAVIGATION)
class ProductDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }
// Lifecycle method 
// This method is called after the component is rendered for the first time.
// We will call the API to get the product details in this method.
// We will get the product id from the URL parameters using this.props.params.id
// ProductService.getProductById(id) is used
  componentDidMount() {
    var id = this.props.params.id;

    ProductService.getProductById(id)
      .then(this.handleSuccess.bind(this));
  }

  handleSuccess(response) {
    this.setState({
      product: response.data
    });
  }

  render() {
    var product = this.state.product;

    return (
      <div>
        <h2>Product Details</h2>
        <p><b>Title:</b> {product.title}</p>
        <p><b>Price:</b> ₹{product.price}</p>
        <p><b>Description:</b> {product.description}</p>
      </div>
    );
  }
}

export default ProductDetails;