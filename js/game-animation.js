// game-animation.js
document.addEventListener("DOMContentLoaded", () => {
  const stepImage = document.getElementById("step-image");
  const stepText = document.getElementById("step-text");

  const steps = [
    {
      text: "Раздача: каждому игроку раздаётся по 13 тайлов.",
      img: "tiles/regular/start-hand.png"
    },
    {
      text: "Ход игрока: берём тайл со стены.",
      img: "tiles/regular/draw.png"
    },
    {
      text: "Игрок сбрасывает один тайл.",
      img: "tiles/regular/discard.png"
    },
    {
      text: "Вызов: другой игрок может объявить Чи, Пон или Кан.",
      img: "tiles/regular/pon.png"
    },
    {
      text: "Игрок объявляет Риичи, если его рука готова к победе.",
      img: "tiles/regular/riichi.png"
    },
    {
      text: "Ход завершается, и очередь передаётся следующему игроку.",
      img: "tiles/regular/next-turn.png"
    }
  ];

  let currentStep = 0;

  function renderStep() {
    const step = steps[currentStep];
    stepText.textContent = step.text;
    stepImage.innerHTML = `<img src="${step.img}" alt="step">`;
  }

  document.getElementById("prev").addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    }
  });

  document.getElementById("next").addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      renderStep();
    }
  });

  document.getElementById("reset").addEventListener("click", () => {
    currentStep = 0;
    renderStep();
  });

  renderStep();
});
