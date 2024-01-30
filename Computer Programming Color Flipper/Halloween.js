const halloweenColors = ["#ff6600", "#990000", "#663399", "#ff9933", "#ff3366"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let halloweenColor = halloweenColors[getRandomNumber()];

  color.textContent = halloweenColor;
  document.body.style.backgroundColor = halloweenColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * halloweenColors.length);
}
