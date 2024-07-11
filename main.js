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

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleContacts");
  let contactsHidden = true;

  toggleButton.addEventListener("click", function () {
    const cardTextElements = document.querySelectorAll(".card-text");

    cardTextElements.forEach(function (element) {
      const extractedText = element.getAttribute("onclick");
      const email = extractedText.match(/ .*m/); //IM ABOUT TO LOSE IT, THIS TOOK 2 HOURS TO FIGURE OUT

      if (contactsHidden) {
        element.textContent = `Contact: ${email}`;
      } else {
        element.textContent = `Contact: ***`;
      }
    });

    contactsHidden = !contactsHidden;
  });
});
