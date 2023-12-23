const ref = document.querySelector("form.login-form");

ref.addEventListener("submit", function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    if (Array.from(data.values()).some(value => !value)) {
        return window.alert("Всі поля повинні бути заповненні");
    }

    const entity = Object.fromEntries(data);

    ref.reset();
    console.log(entity);
});

//variant 2
const email = ref.elements.email;
const password = ref.elements.password;
ref.addEventListener("submit_variant2", function onSubmit(e) {
    e.preventDefault();
    if (!email.value || !password.value) {
        return window.alert("Всі поля повинні бути заповненні");
    }
    let lastValue = {
        email: email.value,
        password: password.value
    }

    ref.reset();
    console.log(lastValue);
});