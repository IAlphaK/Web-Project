const { CartItem } = require('../models');

// Create a new cart item
exports.createCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all cart items
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single cart item by ID
exports.getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.cartItemId);
    if (cartItem) {
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a cart item
exports.updateCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.cartItemId);
    if (cartItem) {
      await cartItem.update(req.body);
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a cart item
exports.deleteCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.cartItemId);
    if (cartItem) {
      await cartItem.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
