const { nanoid } = require("nanoid");

const URL = require("../model/url_model");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: " url required" });
  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visithistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetElementByShortId(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visithistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  res.redirect(result.redirectURL);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;

  const result = await URL.findOne({ shortId });

  return res.json({
    totalclicks: result.visithistory.length,
    analytics: result.visithistory,
  });
}
// async function handleDeleteTheShortId(req, res) {
//   const shortId = req.params.shortId
//   const deleteId = await URL.findOneAndDelete(
//     if()
//   )

// }
module.exports = {
  handleGenerateNewShortURL,
  handleGetElementByShortId,
  handleGetAnalytics,
};
