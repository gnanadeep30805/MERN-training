// Requiring modules
var express = require('express');
var mongoose = require('mongoose');
var Product = require('./models/Product');

// Creating Express app
var app = express();

// Middleware to read JSON
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/expproductdb1');

mongoose.connection.on('connected', function () {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', function () {
    console.log('MongoDB connection error');
});


//  ROUTES
//----------
//http://localhost:5000/
// HOME

app.get('/', function (req, res) {
    res.send('Express + MongoDB Product CRUD API');
});


// CREATE (POST)
/*
http://localhost:5000/products

{
"name": "apple",
"price": 25,
"category": "fruits"
} */
app.post('/products', function (req, res) {

    var product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    });

    product.save()
        .then(function (data) {
            res.status(201).json(data);
        })
        .catch(function () {
            res.status(500).send('Error saving product');
        });
});


// READ ALL (GET)
// http://localhost:5000/students
app.get('/products', function (req, res) {

    Product.find()
        .then(function (data) {
            res.json(data);
        })
        .catch(function () {
            res.status(500).send('Error fetching products');
        });
});



//  READ ONE (GET by ID)
//http://localhost:5000/students/6a2b6d821d2ddb24800db04e
app.get('/products/:id', function (req, res) {

    Product.findById(req.params.id)
        .then(function (data) {
            res.json(data);
        })
        .catch(function () {
            res.status(404).send('Product not found');
        });
});


// UPDATE (PUT)
/*
http://localhost:5000/students/6a2c2fefe27812b2c413ac91
{
  "name": "Ramesh Kumar",
  "course": "MongoDB",
  "age": 23
}

*/
app.put('/products/:id', function (req, res) {

    Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        },
        { new: true }
    )
        .then(function (data) {
            res.json(data);
        })
        .catch(function () {
            res.status(500).send('Error updating product');
        });
});


// DELETE
//http://localhost:5000/products/6a2c2fefe27812b2c413ac91
app.delete('/products/:id', function (req, res) {

    Product.findByIdAndDelete(req.params.id)
        .then(function () {
            res.send('Product deleted');
        })
        .catch(function () {
            res.status(500).send('Error deleting product');
        });
});


//  SERVER

app.listen(5000, function () {
    console.log('Server running on port 5000');
});