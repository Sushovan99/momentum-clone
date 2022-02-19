const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  console.log(userName);
  paintGreetings(userName);
};
const savedUserName = localStorage.getItem(USERNAME_KEY);

const paintGreetings = (userName) => {
  greeting.innerText = `Hello, ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

if (savedUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
