document.addEventListener("DOMContentLoaded", function () {
  const filterInput = document.getElementById("filterTitle");
  const cards = document.querySelectorAll(".card");

  filterInput.addEventListener("input", function () {
    const filterText = this.value.trim().toLowerCase();

    cards.forEach(function (card) {
      const title = card
        .querySelector(".card-title")
        .textContent.trim()
        .toLowerCase();
      const cardElement = card.closest(".card");

      if (title.includes(filterText)) {
        cardElement.style.display = "block";
      } else {
        cardElement.style.display = "none";
      }
    });
  });
});
