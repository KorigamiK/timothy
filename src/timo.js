const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<img src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif" loop=infinite />
`);
  res.end();
});

app.use(`/.netlify/functions/timo`, router);

// for testing
app.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../dist/index.html"))
);

module.exports = app;
module.exports.handler = serverless(app);
