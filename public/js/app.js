const linkedCards = document.querySelectorAll(".linked-card");

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
