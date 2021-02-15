const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

// Static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/article/:category", (req, res) => {
  const { category } = req.params;
  console.log(category);
  res.render("article", { category });
});

app.get("/article", (req, res) => {
  const { category } = req.params;
  console.log(category);
  res.render("article", { category });
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
