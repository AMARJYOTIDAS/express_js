const mongoose = require("mongoose");

const userShema = new mongoose.Schema(
  {
    firstname: {
      required: true,
      type: String,
    },
    lastname: {
      type: String,
    },

    email: {
      required: true,
      type: String,
      unique: true,
    },
    gender: {
      required: true,
      type: String,
    },
  },
  { timestamp: true },
);

const user = mongoose.model("user", userShema);

module.exports = user;
