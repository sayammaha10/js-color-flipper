const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorCode = document.querySelector(".color-code");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.background = hexColor;
  colorCode.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
