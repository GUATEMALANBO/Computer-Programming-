const imagesCool = [
  "Knight bumper car.png",
  "Red Knight bumper car.png",
  "pygame.png",
  "road background2.jpg",
  "Speaker icon.png",
];

let coolIndex = 0;

const btnCool = document.getElementById("btn");

btnCool.addEventListener("click", function () {
  const body = document.body;
  body.style.backgroundImage = `url('${imagesCool[coolIndex]}')`;
  coolIndex = (coolIndex + 1) % imagesCool.length;
});