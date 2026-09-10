const express = require("express");
const router = express.Router();
const sales = require("../controller/sales");

router.post("/add", sales.addSales);
router.get("/user/:userId", sales.getSalesByUser);

module.exports = router;
