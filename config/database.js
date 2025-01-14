require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1/realTimeChatDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection is successful"))
    .catch((err) => console.error("Couldn't connect to MongoDB", err));
};

module.exports = connectDB;
