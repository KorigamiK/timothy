const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Access-Control-Allow-Origin": "*",
  });
  res.write(
    `<div class="loading"><img src="https://giphy.com/gifs/5rRMnqwrxpK849BTto" loop=infinite /></div>`
  );
  res.end();
});

app.use(`/.netlify/functions/timo`, router);

// for testing
app.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../dist/index.html"))
);

module.exports = app;
module.exports.handler = serverless(app);
