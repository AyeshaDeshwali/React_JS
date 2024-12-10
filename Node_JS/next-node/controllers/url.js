// controllers/url.js
const shortid = require("shortid");
const URL = require("../modules/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ Error: "url is required" });

  const shortId = shortid.generate(); // Changed shortid generation method

  try {
    const newURL = await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });
    return res.json({ id: newURL.shortId });
  } catch (error) {
    console.error("Error creating short URL:", error.message);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortid; // corrected 'shortId' to 'shortid'
  try {
    const result = await URL.findOne({ shortId });
    return res.json({
      totalClick: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    console.error("Error getting analytics:", error.message);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
}

module.exports = { handleGenerateNewShortUrl, handleGetAnalytics };
