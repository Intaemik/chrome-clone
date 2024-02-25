const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(qwer) {
  qwer.preventDefault();
  // const username = loginInput.value;
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
