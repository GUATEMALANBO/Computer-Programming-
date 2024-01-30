const christmasColors = ["2", "C", "1", "8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let christmasColor = "#";
  for (let i = 0; i < 3; i++) {
    christmasColor += christmasColors[getRandomNumber()];
  }

  color.textContent = christmasColor;
  document.body.style.backgroundColor = christmasColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * christmasColors.length);
}
