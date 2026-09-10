const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    ProductID: {
      type: String,
      required: true,
    },
    StoreID: {
      type: String,
      required: true,
    },
    StockSold: {
      type: Number,
      required: true,
    },
    SaleDate: {
      type: String,
      required: true,
    },
    TotalSaleAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sales", SalesSchema);
