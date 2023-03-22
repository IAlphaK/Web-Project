const crt = require("../controllers/cart.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", crt.create);

// Retrieve all Tutorials
router.get("/", crt.findAll);

// Retrieve all published Tutorials
router.get("/published", crt.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", crt.findOne);

// Update a Tutorial with id
router.put("/:id", crt.update);

// Delete a Tutorial with id
router.delete("/:id", crt.delete);

// Delete all Tutorials
router.delete("/", crt.deleteAll);

module.exports = router;
