"use strict";
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const incorrectCredsAlert = document.getElementById("error-alert");
const loginBtn = document.getElementsByClassName("btn-lg")[0];

incorrectCredsAlert.classList.add("hide");

const CREDENTIALS = {
  email: "admin@gmail.com",
  password: "qwertyqwerty"
};

const login = (function() {
  let email;
  let password;

  function fetchValuesFromForm() {
    inputEmail.addEventListener("change", function() {
      incorrectCredsAlert.style.display = "none";
      email = inputEmail.value;
    });
    inputPassword.addEventListener("change", function() {
      incorrectCredsAlert.style.display = "none";
      password = inputPassword.value;
    });
  }

  loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
    emptyFieldsCheck();
    checkFields();
  });

  function submitForm() {
    location.assign("./logged-in.html");
  }
  function emptyFieldsAlert() {
    incorrectCredsAlert.innerText = "Форма заполнена неверно";
    incorrectCredsAlert.style.display = "block";
  }
  function wrongCredsAlert() {
    incorrectCredsAlert.innerText = "Ваш емейл и/или пароль неверны";
    incorrectCredsAlert.style.display = "block";
  }
  function emptyFieldsCheck() {
    if (!(email && password)) {
      emptyFieldsAlert();
    }
  }

  function checkFields() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /^[A-Za-z]\w{7,14}$/.test(password)
    ) {
      if (
        localStorage.getItem("email") == email &&
        localStorage.getItem("password") == password
      ) {
        submitForm();
      } else wrongCredsAlert();
    } else {
      emptyFieldsAlert();
    }
  }

  return {
    setLogAndPass: function(credentials) {
      localStorage.setItem("email", credentials.email);
      localStorage.setItem("password", credentials.password);
    },

    initComponent: function() {
      fetchValuesFromForm();
    }
  };
})();
login.setLogAndPass(CREDENTIALS);
login.initComponent();