const express = require("express");

const router = express.Router();

const URL = require("../model/url_model");

const user = require("../model/user");

router.get("/", async (req, res) => {
  const allURL = await URL.find({});
  return res.render("home", { urls: allURL });
});

router.get("/signup", (req, res) => {
  return res.render("signUp");
});

router.get("/login", (req, res) => {
  return res.render("login");
});
module.exports = router;
