const mongoose = require("mongoose");
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://arkobag712409:8H4XiT373RVx3xdg@cluster0.8lvaz.mongodb.net/storemanagement";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };