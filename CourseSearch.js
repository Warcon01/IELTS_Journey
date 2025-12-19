document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("courseSearch");
  const clearBtn = document.getElementById("clearSearch");

  // Your cards use class="card"
  const CARD_SELECTOR = ".card";

  // Your rating dropdown is id="filter-rating"
  function getSelectedMinRating() {
    const ratingSelect = document.getElementById("filter-rating");
    if (!ratingSelect) return null;

    const raw = (ratingSelect.value || "").toString().replace(",", ".");
    const num = parseFloat(raw);
    return Number.isFinite(num) ? num : null;
  }

  // Rating on your page is stars, not data-rating yet -> we skip rating check safely
  function getCardRating(card) {
    const direct = card.getAttribute("data-rating");
    if (direct) return parseFloat(direct.replace(",", "."));
    return NaN; // no rating stored -> treat as unknown
  }

  function applyFilters() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const minRating = getSelectedMinRating();

    const cards = Array.from(document.querySelectorAll(CARD_SELECTOR));

    cards.forEach((card) => {
      const title = card.querySelector(".card-title, h5")?.textContent?.trim().toLowerCase() || "";
      const desc  = card.querySelector(".card-text, p")?.textContent?.trim().toLowerCase() || "";
      const haystack = `${title} ${desc}`;

      const matchesSearch = q === "" || haystack.includes(q);

      let matchesRating = true;
      if (minRating !== null) {
        const r = getCardRating(card);
        // If no rating saved (NaN), keep visible (so filter doesn't hide everything)
        matchesRating = Number.isFinite(r) ? r >= minRating : true;
      }

      card.style.display = (matchesSearch && matchesRating) ? "" : "none";
    });
  }

  if (searchInput) searchInput.addEventListener("input", applyFilters);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      applyFilters();
    });
  }

  const ratingSelect = document.getElementById("filter-rating");
  if (ratingSelect) ratingSelect.addEventListener("change", applyFilters);

  applyFilters();
});
