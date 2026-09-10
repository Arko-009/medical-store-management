const mongoose = require("mongoose");
const Store = require("../models/store");

// Add Store
const addStore = async (req, res) => {
  try {
    const store = new Store({
      userID: req.body.userId,
      name: req.body.name,
      category: req.body.category,
      address: req.body.address,
      city: req.body.city,
      image: req.body.image,
    });

    const saved = await store.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Stores by User
const getStoresByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // ✅ userID is stored as STRING in DB
    const stores = await Store.find({
      userID: userId,
    });

    res.status(200).json(stores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch stores" });
  }
};
module.exports = { addStore, getStoresByUser };
