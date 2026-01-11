function comingSoon() {
  alert("Fitur ini segera hadir di TAKOKA 🚀");
}

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
  const keyword = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(keyword) ? "block" : "none";
  });
});
