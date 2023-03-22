const cust = require("../controllers/customer.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", cust.create);

// Retrieve all Tutorials
router.get("/", cust.findAll);

// Retrieve all published Tutorials
router.get("/published", cust.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", cust.findOne);

// Update a Tutorial with id
router.put("/:id", cust.update);

// Delete a Tutorial with id
router.delete("/:id", cust.delete);

// Delete all Tutorials
router.delete("/", cust.deleteAll);

module.exports = router;
