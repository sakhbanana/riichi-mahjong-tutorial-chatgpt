// tiles-filter.js
document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("filter-type");
  const searchInput = document.getElementById("search");
  const tiles = document.querySelectorAll("#tiles-grid img");

  function applyFilter() {
    const filter = filterSelect.value;
    const query = searchInput.value.toLowerCase();

    tiles.forEach(tile => {
      const type = tile.dataset.type;
      const alt = tile.alt.toLowerCase();
      const matchesFilter = (filter === "all" || type === filter);
      const matchesSearch = alt.includes(query);

      tile.style.display = (matchesFilter && matchesSearch) ? "inline-block" : "none";
    });
  }

  filterSelect.addEventListener("change", applyFilter);
  searchInput.addEventListener("input", applyFilter);

  applyFilter(); // стартовый вызов
});
