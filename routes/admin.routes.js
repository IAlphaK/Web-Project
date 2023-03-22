const adm = require("../controllers/admin.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", adm.create);

// Retrieve all Tutorials
router.get("/", adm.findAll);

// Retrieve all published Tutorials
router.get("/published", adm.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", adm.findOne);

// Update a Tutorial with id
router.put("/:id", adm.update);

// Delete a Tutorial with id
router.delete("/:id", adm.delete);

// Delete all Tutorials
router.delete("/", adm.deleteAll);

module.exports = router;
