const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

// Create a new cart item
router.post('/', cartController.createCartItem);

// Get all cart items
router.get('/', cartController.getAllCartItems);

// Get a single cart item by ID
router.get('/:cartItemId', cartController.getCartItemById);

// Update a cart item
router.put('/:cartItemId', cartController.updateCartItem);

// Delete a cart item
router.delete('/:cartItemId', cartController.deleteCartItem);

module.exports = router;
