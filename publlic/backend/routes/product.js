const express = require("express");
const Product = require("../models/product");

const extractFile = require("../middleware/file");
const ProductController = require("../controllers/user");
const router = express.Router();


router.post("", (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const product = new Product({
    name: req.body.name,
    imagePath: url + "/images/products/" + req.body.filename,
    cost: req.body.cost
  });
  product
    .save()
    .then(createdProd => {
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdProd,
          id: createdProd._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a post failed!"
      });
    });
});

router.get("", (req, res, next) => {
  const productQuery = Product.find();
  let fetchedProduct;
  productQuery
    .then(documents => {
      fetchedProduct = documents;
      return Product.count();
    })
    .then(count => {
      res.status(200).json({
        message: "product fetched successfully!",
        product: fetchedProduct,
        maxProducts: count
      });
    });
});

router.get("/:id", (req, res, next) => {
  Product.findById(req.params.id).then(product => {
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "product not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Product.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "product deleted!" });
  });
});

module.exports = router;
