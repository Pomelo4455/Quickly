require("dotenv").config();
const http = require("http");
const port = process.env.PORT;
const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const scrape = require("./scraper"); // Import the scraper
const generateSummary = require("./model"); // Import the summarizer

app.use(express.static(path.join(__dirname, "public")));

router.get("/summarize", async (req, res) => {
  const url = req.query.url; // Get the URL from the query string
  try {
    const scrapedData = await scrape(url);
    console.log(scrapedData);
    const summary = await generateSummary(scrapedData);
    res.send(summary);
  } catch (err) {
    res.status(500).send("An error occurred while summarizing the page");
    console.error(err);
  }
});


app.use("/", router);

http.createServer(app).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/...`);
});

