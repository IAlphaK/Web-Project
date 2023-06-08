const db = require("../models");
const Product = db.inv;
const { Op } = require("sequelize");

// Create a new product
exports.createProduct = (req, res) => {
  // Validate request
  if (!req.body.PName) {
    res.status(400).send({
      message: "Product name can not be empty!",
    });
    return;
  }

  // Create a product
  const product = {
    PName: req.body.PName,
    PStock: req.body.PStock,
    PPrice: req.body.PPrice,
    PCategory: req.body.PCategory,
    PImage: req.body.PImage,
  };

  // Save the product in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product.",
      });
    });
};

// Retrieve all products
exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Retrieve products by category
exports.getProductsByCategory = (req, res) => {
  const category = req.params.category;

  Product.findAll({ where: { PCategory: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products by category.",
      });
    });
};

// Retrieve a single product by ID
exports.getProductById = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving product with id=" + id,
      });
    });
};

// Update a product by ID
exports.updateProduct = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { ProductID: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating product with id=" + id,
      });
    });
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { ProductID: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + id,
      });
    });
};
