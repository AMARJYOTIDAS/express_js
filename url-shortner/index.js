const express = require("express");

const app = express();

const { connectMongoDB } = require("./connect");

const urlRoute = require("./router/url");

const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/short_url_1")
  .then(() => console.log("mongodb is connected"))
  .catch(() => console.log("error"));

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
