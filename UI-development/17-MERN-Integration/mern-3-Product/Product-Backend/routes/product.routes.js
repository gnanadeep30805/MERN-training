var express = require("express");
var router = express.Router();
var Product = require("../models/Product");

/* GET ALL PRODUCTS */
router.get("/products", function (req, res) {
    Product.find()
        .then(function (products) {
            res.json(products);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* GET PRODUCT BY ID */
router.get("/products/:id", function (req, res) {
    Product.findById(req.params.id)
        .then(function (product) {
            res.json(product);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* CREATE PRODUCT */
router.post("/products", function (req, res) {
    var product = new Product({
        productname: req.body.productname,
        productprice: req.body.productprice,
        productstock: req.body.productstock,
    });
    product.save()
        .then(function (product) {
            res.json(product);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* UPDATE PRODUCT */
router.put("/products/:id", function (req, res) {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(function (product) {
            res.json(product);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* DELETE PRODUCT */
router.delete("/products/:id", function (req, res) {
    Product.findByIdAndDelete(req.params.id)
        .then(function () {
            res.json({ message: "Product deleted" });
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

module.exports = router;