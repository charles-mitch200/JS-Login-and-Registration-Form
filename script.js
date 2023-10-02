const signUpBtn = document.querySelector(".js-sign-up");
const signInBtn = document.querySelector(".js-sign-in");
const nameField = document.querySelector(".js-name-field");
const title = document.querySelector(".js-title");

signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signInBtn.classList.remove("disable");
  signUpBtn.classList.add("disable");
});

signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signInBtn.classList.add("disable");
  signUpBtn.classList.remove("disable");
});
