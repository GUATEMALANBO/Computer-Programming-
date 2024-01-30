// set initial value to zero
let count = 0;
// select value and buttons
const value = document.getElementById("value");
const hint = document.getElementById("hint");
const btns = document.querySelectorAll(".btn");

let positive = "Positive";
let negative = "Negative";
let defaultValue = "Zero";

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("10")) {
      count += 10;
    } else if (styles.contains("decrease10")) {
      count -= 10;
      if (count < 0) {
        count -=0;
      }
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "#fff";
      hint.textContent = positive;
      hint.style.color = "#fff";
    } else if (count < 0) {
      value.style.color = "#FF0000";
      hint.textContent = negative;
      hint.style.color = "#FF0000";
    } else {
      value.style.color = "#000000";
      hint.textContent = defaultValue;
      hint.style.color = "#000000";
    }
    value.textContent = count;
  });
});

const randomBtn = document.querySelector(".random");

randomBtn.addEventListener("click", function () {
  const tenDigitArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomIndex = Math.floor(Math.random() * tenDigitArray.length);
  const randomValue = tenDigitArray[randomIndex];

  // Decide whether to increase or decrease based on the random number
  if (randomValue % 2 === 0) {
    count += randomValue;
  } else {
    count -= randomValue;
    if (count < 0) {
      count -= 0;
    }
  }

  // Update the display based on the new count
  updateDisplay();
});

function updateDisplay() {
  if (count > 0) {
    value.style.color = "#fff";
    hint.textContent = positive;
    hint.style.color = "#fff";
  } else if (count < 0) {
    value.style.color = "#FF0000";
    hint.textContent = negative;
    hint.style.color = "#FF0000";
  } else {
    value.style.color = "#000000";
    hint.textContent = defaultValue;
    hint.style.color = "#000000";
  }
  value.textContent = count;
}
