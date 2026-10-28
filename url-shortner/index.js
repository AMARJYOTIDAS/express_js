const express = require("express");

const app = express();

const ejs = require("ejs");

const path = require("path");

const { connectMongoDB } = require("./connect");

const staticRoute = require("./router/staticRouter");

const urlRoute = require("./router/url");
const URL = require("./model/url_model");
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/short_url_1")
  .then(() => console.log("mongodb is connected"))
  .catch(() => console.log("error"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);

app.use("/", staticRoute);

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

app.get("/test", async (req, res) => {
  const allURL = await URL.find();
  return res.render("home", {
    urls: allURL,
  });
});

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
