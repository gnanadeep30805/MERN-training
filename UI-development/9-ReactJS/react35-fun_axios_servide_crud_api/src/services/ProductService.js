import axios from "axios";
// The ProductService.js file is responsible for handling all the API calls related to products.
// It uses the axios library to make HTTP requests to the API endpoint. The file defines 
// several functions for performing CRUD operations on products, such as getting all products, 
// getting a product by ID, adding a new product, updating an existing product, 
// and deleting a product. Each function returns a promise that resolves with the response
//  from the API. The functions are then exported as part of the ProductService object
//  for use in other parts of the application.

//var API_URL = "https://fakestoreapi.com/products"; This variable holds the base URL for the
//  API endpoint that we will be making requests to.

var API_URL = "https://fakestoreapi.com/products";

function getAllProducts() {
  return axios.get(API_URL);
}

function getProductById(id) {
  return axios.get(API_URL + "/" + id);
}

function addProduct(product) {
  return axios.post(API_URL, product);
}

function updateProduct(id, product) {
  return axios.put(API_URL + "/" + id, product);
}

function deleteProduct(id) {
  return axios.delete(API_URL + "/" + id);
}
// The ProductService object is created to encapsulate all the functions related to 
// product operations.
// Each function is defined to perform a specific CRUD operation using axios to make
// HTTP requests to the API endpoint. The functions are then exported as part of the 
// ProductService object for use in other parts of the application.
var ProductService = {
  getAllProducts: getAllProducts,
  getProductById: getProductById,
  addProduct: addProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
};

export default  ProductService;