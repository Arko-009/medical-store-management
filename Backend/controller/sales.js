const Sales = require("../models/sales");

// ADD SALE
const addSales = async (req, res) => {
  try {
    const sale = new Sales(req.body);
    const saved = await sale.save();
    console.log("SALE SAVED:", saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error("SALE ERROR:", err);
    res.status(400).json(err);
  }
};

const getSalesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const sales = await Sales.find({ userID: userId }).sort({ _id: -1 });
    res.status(200).json(sales);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = { addSales, getSalesByUser };
