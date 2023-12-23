const refBoxCotainer = document.getElementById("boxes");
const refInput = document.querySelector("#controls > input");
const refCreate = document.querySelector("button[data-create]");
const refDelete = document.querySelector("button[data-destroy]");

refCreate.addEventListener("click", () => {
  createBoxes(refInput.value);
});
refDelete.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refBoxCotainer.innerHTML = "";
}

function createBoxes(amount, startValue = 30, increaseBy = 10) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = startValue + (increaseBy * i) + "px";
    div.style.height = startValue + (increaseBy * i) + "px";
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  refBoxCotainer.appendChild(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
