import axios from "axios";
// This service class provides methods to perform CRUD operations on products using the Fake Store API.
//Imports axios library
//Axios is used to make HTTP requests
//All API logic is written here
class ProductService {
  //Used to fetch all products 
  //Returns a promise that resolves to the response from the API
  getAllProducts() {
    return axios.get("https://fakestoreapi.com/products");
  }
//Used to fetch a product by its ID
//Takes an ID as a parameter and returns a promise that resolves to the response from the API
  getProductById(id) {
    return axios.get("https://fakestoreapi.com/products/" + id);
  }
//Used to add a new product
//Takes a product object as a parameter and returns a promise that resolves to the response
//  from the API

  addProduct(product) {
    return axios.post("https://fakestoreapi.com/products", product);
  }
//Used to update an existing product
//Takes an ID and a product object as parameters and returns a promise that resolves to the response from the API
  updateProduct(id, product) {
    return axios.put("https://fakestoreapi.com/products/" + id, product);
  }
//Used to delete a product by its ID
//Takes an ID as a parameter and returns a promise that resolves to the response from the API
  deleteProduct(id) {
    return axios.delete("https://fakestoreapi.com/products/" + id);
  }
}
//Exporting an instance of the ProductService class to be used in other parts of the application
export default new ProductService();
//This allows other components to import and use the methods defined in this service
//  class to interact with the Fake Store API for product-related operations.