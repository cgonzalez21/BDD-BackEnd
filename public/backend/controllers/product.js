const Product = require("../models/product");

  exports.getProduct = (req, res, next) => {
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



