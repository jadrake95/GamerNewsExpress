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
  const title = "home";
  res.render("index", { title });
});

app.get("/article/:category", (req, res) => {
  const { category } = req.params;
  const title = "article";
  res.render("article", { category, title });
});

app.get("/article", (req, res) => {
  const { category } = req.params;
  const title = "article";
  res.render("article", { category, title });
});

app.get("/contact", (req, res) => {
  const title = "contact";
  res.render("contact", { title });
});

app.get("/about", (req, res) => {
  const title = "about";
  res.render("about", { title });
});

app.get("/browseArticles", (req, res) => {
  const title = "browseArticles";
  res.render("browseArticles", { title });
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
