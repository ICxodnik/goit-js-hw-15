const refSpan = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", function onClick() {
  const randomColor = getRandomHexColor();
  refSpan.innerText = randomColor;
  document.body.style.backgroundColor = randomColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
