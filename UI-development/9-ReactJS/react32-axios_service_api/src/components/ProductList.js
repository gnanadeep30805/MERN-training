import React, { Component } from "react";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
// ProductList component is used to display the list of products in the UI
// We will call the API to get the list of products in componentDidMount() method.  
class ProductList extends Component {
 // constructor(props) is used to initialize the state of the component. 
  // It is called before the component is mounted.
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    // Binding methods
    
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
  }
// Lifecycle method
// This method is called after the component is rendered for the first time.
// We will call the API to get the list of products in this method.
// ProductService.getAllProducts() is used to call the API to get the list of products.
// API request starts here
// .then() is used to handle the successful response from the API.
// .catch() is used to handle the error response from the API.
// When the API call is successful, we update the state with the list of products 
// received from the API.
  componentDidMount() {
    ProductService.getAllProducts()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  handleSuccess(response) {
    this.setState({
      products: response.data
    });
  }

  handleError(error) {
    console.log(error);
  }

  renderProduct(product) {
    return (
      <li key={product.id}>
        {product.title} -
        <Link to={"/product/" + product.id}> View</Link>
      </li>
    );
  }

  // Render method is used to display the UI of the component
  // We will display the list of products in the UI using JSX.
  // We will use the map() method to iterate over the list of products and display 
  // each product in the UI.  
  // {product.title} displays the title of the product in the UI.
  // <Link to={`/product/${product.id}`}> View</Link> is used to create a link to the 
  // ProductDetails component to view the details of the product. 
  // The URL parameter is passed to the ProductDetails component using the Link component.
  render() {
    return (
      <div>
        <h2>Product List</h2>

        <ul>
          {this.state.products.map(this.renderProduct)}
        </ul>
      </div>
    );
  }
}

export default ProductList;