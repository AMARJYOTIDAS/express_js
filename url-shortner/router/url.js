const express = require("express");

const router = express.Router();

const {
  handleGenerateNewShortURL,
  handleGetElementByShortId,
  handleGetAnalytics,
} = require("../controller/url");

router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", handleGetElementByShortId);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
