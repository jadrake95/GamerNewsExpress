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

app.get("/browseArticles/:category", (req, res) => {
  const { category } = req.params;
  const images = {
    playstation: "/Images/playstation1.jpg",
    xbox: "/Images/controller1.jpg",
    nintendo: "/Images/nintendo1.jpg",
    general: "/Images/comp1.jpg",
  };
  const imagePath = `${images[category]}`;
  console.log(imagePath);
  const title = "categoryArticles";
  res.render("categoryArticles", { category, title, imagePath });
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
