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
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true },
);

const URL = new mongoose.model("url", url_schema);

module.exports = URL;
