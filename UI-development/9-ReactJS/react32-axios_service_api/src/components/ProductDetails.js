
import React, { Component } from "react";
import ProductService from "../services/ProductService";

class ProductDetails extends Component {
// We will call the API to get the details of a single product in componentDidMount() method.
//  constructor(props) is used to initialize the state of the component. It is called before
//  the component is mounted.
  constructor(props) {
    //Calling parent class constructor with props parameter
    super(props);
    //Creating state object
    // product object initially empty
    this.state = {
      product: {}
    };
  }
 //Lifecycle method
 // This method is called after the component is rendered for the first time.
  componentDidMount() {
    //Getting product id from URL parameters using this.props.params.id
    var id = this.props.params.id;
     //Calling service method to get the details of a single product from API
    ProductService.getProductById(id)
    //API request starts here   
      .then(this.handleSuccess.bind(this))
      //Executes when API call is successful
      //bind(this) is required to access this.setState() method inside handleSuccess() method
      .catch(this.handleError.bind(this));
  }
  //Method receives API response as parameter when API call is successful
  handleSuccess(response) {
    //Stores API data into state  :  Triggers re-rendering of component
    this.setState({
        // product object in state is updated with API response data
      product: response.data
    });
  }

  handleError(error) {
    console.log(error);
  }
//Render method is used to display the UI of the component
  render() {
    //Getting product object from state to display product details in the UI
    var product = this.state.product;
        //Displaying product details in the UI using JSX
        // {product.title} displays the title of the product
        // {product.price} displays the price of the product
        // {product.description} displays the description of the product    
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


