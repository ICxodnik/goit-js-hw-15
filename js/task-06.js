function onBlur(evt) {
    const { classList, value, dataset } = evt.target;
    if (value.length == dataset.length) {
        classList.remove("invalid");
        classList.add("valid");
    }
    else {
        classList.remove("valid");
        classList.add("invalid");
    }
}

document.getElementById("validation-input").addEventListener("blur", onBlur);

/// variant 2
// document.getElementById("validation-input").addEventListener(
//     "blur",
//     function onBlur({ target: { classList, value, dataset } }) {
//         classList.remove("invalid");
//         classList.remove("valid");
//         const className = value.length == dataset.length ? "valid" : "invalid";
//         classList.add(className);
//     }
// );
