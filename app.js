const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world!",
  });
});

const environment = process.env.environment;

if (environment !== "test") {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = app;
