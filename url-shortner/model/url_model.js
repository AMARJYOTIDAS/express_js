const mongoose = require("mongoose");

const url_schema = new mongoose.Schema(
  {
    shortId: {
      required: true,
      type: String,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visithistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true },
);

const URL = new mongoose.model("url", url_schema);

module.exports = URL;
