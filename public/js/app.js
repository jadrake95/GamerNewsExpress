const linkedCards = document.querySelectorAll(".linked-card");
const flexSquares = document.querySelectorAll(".flexSquare");
const browsingCards = document.querySelectorAll(".browsing-card");

linkedCards.forEach((card) => {
  if (card.classList.contains("cat-general")) {
    var category = "General";
  } else if (card.classList.contains("cat-playstation")) {
    var category = "Playstation";
  } else if (card.classList.contains("cat-xbox")) {
    var category = "Xbox";
  } else if (card.classList.contains("cat-nintendo")) {
    var category = "Nintendo";
  } else {
    var category = "General";
  }
  card.addEventListener("click", function () {
    window.location = `/article/${category}`;
  });
});

flexSquares.forEach((square) => {
  if (square.classList.contains("cat-general")) {
    var category = "general";
  } else if (square.classList.contains("cat-playstation")) {
    var category = "playstation";
  } else if (square.classList.contains("cat-xbox")) {
    var category = "xbox";
  } else if (square.classList.contains("cat-nintendo")) {
    var category = "nintendo";
  } else {
    var category = "general";
  }
  square.addEventListener("click", function () {
    window.location = `/browseArticles/${category}`;
  });
});

browsingCards.forEach((card) => {
  if (card.classList.contains("cat-general")) {
    var category = "General";
  } else if (card.classList.contains("cat-playstation")) {
    var category = "Playstation";
  } else if (card.classList.contains("cat-xbox")) {
    var category = "Xbox";
  } else if (card.classList.contains("cat-nintendo")) {
    var category = "Nintendo";
  } else {
    var category = "General";
  }
  card.addEventListener("click", function () {
    window.location = `/article/${category}`;
  });
});
