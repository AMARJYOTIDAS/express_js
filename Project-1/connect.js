const mongoose = require("mongoose");
async function connectDb(url) {
  return mongoose
    .connect(url)
    .then({ msg: "connection success" })
    .catch("error", error);
}

module.exports = { connectDb };
