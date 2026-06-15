import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function ProductDetailsWrapper() {
  // useParams() hook is used to get the URL parameters in functional components
  // params object will contain the URL parameters as key-value pairs
  // In our case, params.id will contain the product id from the URL
  var params = useParams();
  // We are passing the params object as props to ProductDetails component to get the 
  // product id in that component
  //Returning ProductDetails component with params as props to display product 
  // details based on product id from URL
  return <ProductDetails params={params} />;
  // ProductDetails component will receive the params object as props and use it to get
  //  the product id from URL and display product details based on that id
}

// Route for product list page - displays list of products
// Route for product details page - displays details of a single product based on product id from URL 
// :id is a URL parameter which will contain the product id 
// When user navigates to /product/:id, ProductDetailsWrapper component will be rendered
// ProductDetailsWrapper component will get the product id from URL using useParams() 
        //hook and pass it as props to ProductDetails component to display product details 
        //based on that id
function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<ProductList />} />
       
        <Route path="/product/:id" element={<ProductDetailsWrapper />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;