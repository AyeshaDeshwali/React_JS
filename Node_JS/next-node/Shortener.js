const express = require("express");
const { connectToMongoDB } = require("./connection/m-connect");
const URL = require("./modules/url");
const app = express();
const port = 3003;

connectToMongoDB("mongodb://localhost:27017/shortID").then(() => {
  console.log(`connected...`);
});

app.use(express.json());

const urlRoute = require("./routes/url");

app.use("/url", urlRoute);

app.get("/:shortid", async (req, res) => {
  const shortId = req.params.shortid;
  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );
    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Error getting URL:", error.message);
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
