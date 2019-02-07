"use strict";
const backBtn = document.getElementById("backBtn");
const emailResult = document.getElementById("email-result");
const passwordResult = document.getElementById("password-result");
const togglePassword = document.getElementById("togglePassword");

const CREDENTIALS = {
  email: "admin@gmail.com",
  password: "qwertyqwerty"
};

emailResult.defaultValue = CREDENTIALS.email;
passwordResult.defaultValue = CREDENTIALS.password;

togglePassword.innerText = "Показать пароль";

togglePassword.addEventListener("click", function() {
  passwordChange();
});

backBtn.addEventListener("click", function(e) {
  e.preventDefault();
  location.replace("./index.html");
});

togglePassword.addEventListener("click", function(e) {
  e.preventDefault();
});
function passwordChange() {
  if (togglePassword.innerText == "Показать пароль") {
    passwordResult.type = "text";
    togglePassword.innerText = "Скрыть пароль";
  } else if (togglePassword.innerText == "Скрыть пароль") {
    passwordResult.type = "password";
    togglePassword.innerText = "Показать пароль";
  }
}
