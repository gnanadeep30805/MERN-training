import React from "react";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";

import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
// The App component sets up the routing for the application using React Router.
function ProductDetailsWrapper() {
  //The useParams hook is used to access the URL parameters, which in this case is the product ID.
  //The ProductDetails component is rendered with the params passed as props, allowing it to
  //  fetch and display the details of the specific product based on the ID from the URL.
  var params = useParams();
  //The ProductDetails component will use the params to fetch and display the details of the 
  // specific product based on the ID from the URL.
  return <ProductDetails params={params} />;
}
/*  The AddProductWrapper and EditProductWrapper components are similar to the 
    ProductDetailsWrapper  component.
    They use the useNavigate hook to get the navigate function, which is then passed as a
    prop to the AddProduct and EditProduct components.
    This allows those components to navigate to different routes after performing their 
    respective operations (adding or editing a product).  */
function AddProductWrapper() {
  // The useNavigate hook is used to get the navigate function, which allows the
  //  AddProduct component  to navigate to different routes after adding a product.
  var navigate = useNavigate();
  //The AddProduct component is rendered with the navigate function passed as a prop,
  // allowing it to navigate to different routes after adding a product.
  return <AddProduct navigate={navigate} />;
}
// The EditProductWrapper component is similar to the AddProductWrapper component, but it also uses the useParams hook to access the URL parameters (product ID) for editing a specific product.
function EditProductWrapper() {
  // The useParams hook is used to access the URL parameters, which in this case is the
  //  product ID for editing a specific product.
  // The useNavigate hook is used to get the navigate function, which allows the EditProduct
 
 //  var params = useParams(); //This line is commented out because the EditProduct component 
 // will receive the params as props, so we don't need to use the useParams hook here.
  var params = useParams();
  // The useNavigate hook is used to get the navigate function, which allows the EditProduct
  //  component to navigate to different routes after editing a product.
  //var navigate = useNavigate(); //This line is commented out because the EditProduct 
  // component will receive the navigate function as a prop, so we don't need to use the 
  // useNavigate hook here.
  var navigate = useNavigate();
  //The EditProduct component is rendered with the params and navigate function passed as props,
  // allowing it to fetch the product details for editing and navigate to different routes
  //  after editing a product.
  return <EditProduct params={params} navigate={navigate} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetailsWrapper />} />
        <Route path="/add" element={<AddProductWrapper />} />
        <Route path="/edit/:id" element={<EditProductWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;