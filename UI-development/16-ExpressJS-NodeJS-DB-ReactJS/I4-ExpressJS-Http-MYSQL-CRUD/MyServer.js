var express = require('express');
var Product = require('./models/Product'); // correct path

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
HOME
http://localhost:5000/
*/
app.get('/', function (req, res) {
    res.send('Express + MySQL Product CRUD API');
});

/*
CREATE
POST http://localhost:5000/products
{
  "name": "Murali",
  "price": 25
}
*/
app.post('/products', function (req, res) {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send('Request body is missing or empty. Please ensure you send content as JSON or URL-encoded form.');
    }

    Product.create(req.body, function (err, result) {
        if (err) {
            res.status(500).send('Error inserting product');
        } else {
            res.status(201).json({ id: result.insertId });
        }
    });
});

/*
READ ALL
GET http://localhost:5000/products
*/
app.get('/products', function (req, res) {

    Product.findAll(function (err, rows) {
        if (err) {
            res.status(500).send('Error fetching product');
        } else {
            res.json(rows);
        }
    });
});

/*
READ ONE
GET http://localhost:5000/students/1
*/
app.get('/products/:id', function (req, res) {

    Product.findById(req.params.id, function (err, rows) {
        if (err || rows.length === 0) {
            res.status(404).send('product not found');
        } else {
            res.json(rows[0]);
        }
    });
});

/*
UPDATE
PUT http://localhost:5000/students/1
{
  "name": "Ramesh Kumar",
  "course": "MySQL",
  "age": 23
}
*/
app.put('/products/:id', function (req, res) {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send('Request body is missing or empty. Please ensure you send content as JSON or URL-encoded form.');
    }

    Product.update(req.params.id, req.body, function (err) {
        if (err) {
            res.status(500).send('Error updating product');
        } else {
            res.send('product updated');
        }
    });
});

/*
DELETE
DELETE http://localhost:5000/products/1
*/
app.delete('/products/:id', function (req, res) {

    Product.delete(req.params.id, function (err) {
        if (err) {
            res.status(500).send('Error deleting product');
        } else {
            res.send('Product deleted');
        }
    });
});

app.listen(5000, function () {
    console.log('Server running on port 5000');
});