const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');

// Create a new customer
router.post('/', customerController.createCustomer);

// Get all customers
router.get('/', customerController.getAllCustomers);

// Get a single customer by ID
router.get('/:customerId', customerController.getCustomerById);

// Update a customer
router.put('/:customerId', customerController.updateCustomer);

// Delete a customer
router.delete('/:customerId', customerController.deleteCustomer);

module.exports = router;
