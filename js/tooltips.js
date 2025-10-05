// tooltips.js
document.addEventListener("DOMContentLoaded", () => {
  const tooltipBox = document.getElementById("tooltip-box");

  const glossary = {
    mentsu: { text: "Мэнтсу — завершённая комбинация из трёх или четырёх тайлов (Чи, Пон или Кан).", img: "tiles/regular/pin123.png" },
    jantou: { text: "Джантай (глаз) — пара одинаковых тайлов, обязательная часть руки.", img: "tiles/regular/dragon-red.png" },
    tatsu: { text: "Татцу — незавершённая последовательность из двух тайлов (например, 3–4 ман).", img: "tiles/regular/man34.png" },
    oya: { text: "Оя — дилер (раздающий). Его выигрыши и проигрыши считаются по другим правилам.", img: "tiles/regular/wind-east.png" },
    ko: { text: "Ко — любой не-дилер (обычный игрок).", img: "tiles/regular/wind-north.png" },
    furiten: { text: "Фуритен — ситуация, когда игрок не может выиграть на сбросе из-за пропущенной победной возможности.", img: "tiles/regular/pin7.png" }
  };

  document.querySelectorAll(".tooltip").forEach(el => {
    el.addEventListener("mouseenter", e => {
      const term = el.dataset.term;
      const data = glossary[term];
      if (data) {
        tooltipBox.innerHTML = `
          <p>${data.text}</p>
          ${data.img ? `<img src="${data.img}" alt="${term}">` : ""}
        `;
        tooltipBox.hidden = false;
        tooltipBox.style.left = e.pageX + 10 + "px";
        tooltipBox.style.top = e.pageY + 10 + "px";
      }
    });

    el.addEventListener("mousemove", e => {
      tooltipBox.style.left = e.pageX + 10 + "px";
      tooltipBox.style.top = e.pageY + 10 + "px";
    });

    el.addEventListener("mouseleave", () => {
      tooltipBox.hidden = true;
    });
  });
});
