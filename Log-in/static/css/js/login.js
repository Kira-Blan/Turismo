let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");

    document.querySelector(".form-signin").action = "/login";
};

signUp.onclick = function() {
    nameInput.style.maxHeight = "none";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");

    document.querySelector(".form-signin").action = "/register";
}