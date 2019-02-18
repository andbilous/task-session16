"use strict";
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const incorrectCredsAlert = document.getElementById("error-alert");
const loginBtn = document.getElementsByClassName("btn-lg")[0];
const backBtn = document.getElementById("backBtn");
const emailResult = document.getElementById("email-result");
const passwordResult = document.getElementById("password-result");
const togglePassword = document.getElementById("togglePassword");

function showSignInForm() {
  document.getElementById('form-signin').style.display = 'block';
  document.getElementById('form-info').style.display = 'none';
}
showSignInForm();

const CREDENTIALS = {
  email: "admin@gmail.com",
  password: "qweqweqwe"
};

incorrectCredsAlert.classList.add("hide");
togglePassword.innerText = "Показать пароль";
emailResult.defaultValue = CREDENTIALS.email;
passwordResult.defaultValue = CREDENTIALS.password;
togglePassword.innerText = "Показать пароль";

const login = (function () {
  let email;
  let password;

  function fetchValuesFromForm() {
    inputEmail.addEventListener("change", function () {
      incorrectCredsAlert.style.display = "none";
      email = inputEmail.value;
    });
    inputPassword.addEventListener("change", function () {
      incorrectCredsAlert.style.display = "none";
      password = inputPassword.value;
    });
  }

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (emptyFieldsCheck() && checkFields()) {
      submitForm();
    }
  });

  function submitForm() {
    showInfo();
  }

  function showInfo() {
    document.getElementById('form-signin').style.display = 'none';
    document.getElementById('form-info').style.display = 'block';
  }

  function showSignInForm() {
    document.querySelector('.form-signin').style.display = 'block';
    document.getElementById('form-info').style.display = 'none';
  }

  function setAlert(text) {
    incorrectCredsAlert.innerText = text;
    incorrectCredsAlert.style.display = "block";
  }

  function emptyFieldsCheck() {
    if (!(email && password)) {
      setAlert("Некоторые поля пустые");
      return false;
    } else return true;
  }
  togglePassword.addEventListener("click", function () {
    passwordChange();
  });

  backBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showSignInForm();
  });

  togglePassword.addEventListener("click", function (e) {
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

  function checkFields() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /^[A-Za-z]\w{7,14}$/.test(password)
    ) {
      if (
        localStorage.getItem("email") == email &&
        localStorage.getItem("password") == password
      ) {
        return true;
      } else setAlert('Ваш емейл и/или пароль неверны');
      return false;
    } else {
      setAlert("Форма заполнена неверно");
      return false;
    }
  }
  return {
    setLogAndPass: function (credentials) {
      localStorage.setItem("email", credentials.email);
      localStorage.setItem("password", credentials.password);
    },

    initComponent: function () {
      fetchValuesFromForm();
    }
  };
})();

login.setLogAndPass(CREDENTIALS);
login.initComponent();