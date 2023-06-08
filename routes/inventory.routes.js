const express = require("express");
const router = express.Router();
const invController = require("../controllers/inventory.controller");

// Create a new product
router.post("/products", invController.createProduct);

// Retrieve all products
router.get("/products", invController.getAllProducts);

// Retrieve products by category
router.get("/products/category/:category", invController.getProductsByCategory);

// Retrieve a single product by ID
router.get("/products/:id", invController.getProductById);

// Update a product by ID
router.put("/products/:id", invController.updateProduct);

// Delete a product by ID
router.delete("/products/:id", invController.deleteProduct);

module.exports = router;
