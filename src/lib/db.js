const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error("Error to database");
    console.error(err);
  }
};

module.exports = connect;
