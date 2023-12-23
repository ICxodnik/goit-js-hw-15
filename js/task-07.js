const ref = document.getElementById("text");
document.getElementById("font-size-control").addEventListener("input", function onInput(e) {
    ref.style.fontSize = e.target.value + "px";
});