import React, { Component } from "react";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
// This component is responsible for displaying a list of products and providing
//  options to view,  edit, and delete each product.
class ProductList extends Component {
//The constructor initializes the component's state with an empty array of products.
  constructor(props) {
    super(props);
//The state will hold the list of products fetched from the API
//
    this.state = {
      products: []
    };
  }
//The componentDidMount lifecycle method is called after the component is mounted to the DOM.
//It calls the loadProducts method to fetch the list of products from the API.
  componentDidMount() {
    this.loadProducts();
  }
//The loadProducts method uses the ProductService to fetch all products from the API.
  loadProducts() {
    //The getAllProducts method returns a promise, so we use .then to handle the successful response
    //and .catch to handle any errors that may occur during the API call.
    //The handleSuccess method is called when the API call is successful, 
    // and it updates the component's state with the fetched products.
    //The handleError method is called if there is an error during the API call, 
    // and it logs the error to the console.
    ProductService.getAllProducts()
      .then(this.handleSuccess.bind(this))
      .catch(this.handleError.bind(this));
  }
//The handleSuccess method takes the response from the API and updates the component's state
//  with the list of products.
  handleSuccess(response) {
    //The response.data contains the array of products fetched from the API, and we set it to the products state.
    this.setState({
      //The products state is updated with the fetched products.
      products: response.data
    });
  }
//The handleError method takes an error object and logs it to the console.
  handleError(error) {
    //Log the error to the console
    console.log(error);
  }
// The deleteProduct method takes an ID as a parameter and calls the deleteProduct method from the ProductService to
//  delete the product with the specified ID.  
  deleteProduct(id) {
    //After the product is deleted, the loadProducts method is called again to refresh the 
    // list of products displayed in the UI.
    ProductService.deleteProduct(id)
    //The deleteProduct method returns a promise, so we use .then to handle the successful 
    // response and refresh the product list.
      .then(this.loadProducts.bind(this));
  }
//The render method is responsible for rendering the UI of the component. It displays a heading,
//  a link to add a new product, and a list of products with options to view, edit, and delete each product.
  //The Link component from react-router-dom is used to create a link to the add product page.
render() {
    return (
      <div>
        <h2>Product List</h2>

        <Link to="/add">Add Product</Link>

        <ul>
          {
            //The products state is mapped to a list of <li> elements, where each product's
            //  title is displayed along with links to view and edit the product, and a button
            //  to delete the product.
            this.state.products.map(function (product) {
              return (
                //Each product is rendered as a list item with its title and options to 
                // view, edit, and delete.
                 //The product's title is displayed, and links to view and edit the product 
                  //are provided.
                  //The Link component is used to create links to the view and edit pages for 
                //each product,
                 //{""} is used to add a space between the product title and the links.
                 // <Link to={"/edit/" + product.id}>Edit</Link> : The Link component is used to 
                 // create a link to the edit page for each product.

                 //The button element is used to create a delete button for each product, 
                  //and the onClick event is bound to the deleteProduct method, passing the product's ID as an argument.
               //When the delete button is clicked, the deleteProduct method is called with the 
               //product's ID, which will delete the product and refresh the list.
               //this.deleteProduct.bind(this, product.id) is used to bind the deleteProduct method to 
               //the current context and pass the product
                <li key={product.id}>
                 
                  {product.title}
                
                 
                  {" "}
                  <Link to={"/product/" + product.id}>View</Link>

                  {" "}
                  
                  <Link to={"/edit/" + product.id}>Edit</Link>

                  {" "}
                  
                  <button onClick={this.deleteProduct.bind(this, product.id)}>
                    Delete
                  </button>
                </li>
              );
            }, this)
          }
        </ul>
      </div>
    );
  }
}

export default ProductList;