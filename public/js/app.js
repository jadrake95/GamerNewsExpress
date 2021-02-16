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
    var category = "General";
  } else if (square.classList.contains("cat-playstation")) {
    var category = "Playstation";
  } else if (square.classList.contains("cat-xbox")) {
    var category = "Xbox";
  } else if (square.classList.contains("cat-nintendo")) {
    var category = "Nintendo";
  } else {
    var category = "General";
  }
  square.addEventListener("click", function () {
    window.location = `/article/${category}`;
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
