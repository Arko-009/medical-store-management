const mongoose = require("mongoose");
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://arkobag712409:8H4XiT373RVx3xdg@cluster0.8lvaz.mongodb.net/storemanagement";


let isConnected = false;

async function main() {
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log("MongoDB connection successful");
  } catch (err) {
    console.log("MongoDB connection error: ", err);
  }
}

module.exports = { main };