const express = require("express");
const router = express.Router();
const storeController = require("../controller/store");

// Add Store
router.post("/add", storeController.addStore);

// Get Stores by User
router.get("/user/:userId", storeController.getStoresByUser);

module.exports = router;
