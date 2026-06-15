

import axios from "axios";
//This class will contain all API related code for products. 
// We will create methods in this class and call those methods from our components
//  to get the data from API.
class ProductService {

    // This method will return a promise which will contain the response from API.
    // We will call this method from our ProductList component to get the list of products.
    //Method to fetch all products
  getAllProducts() {
    return axios.get("https://fakestoreapi.com/products");
  }
//Method to fetch product by id
//Method to fetch single product by id
//API URL + product id
  getProductById(id) {
    return axios.get("https://fakestoreapi.com/products/" + id);
  }
}

export default new ProductService();


