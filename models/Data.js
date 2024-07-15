// models/Data.js

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
