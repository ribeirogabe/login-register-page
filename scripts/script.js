const registerScreen = document.querySelector("[data-register-screen]");
const registerButton = document.querySelector("[data-link-login]");
const loginButton = document.querySelector("[data-link-register]");

const showRegisterScreen = () =>{
    registerScreen.classList.add("change_screen");
}

const showLoginScreen = () =>{
    registerScreen.classList.remove("change_screen");
}

loginButton.addEventListener('click', showRegisterScreen);

registerButton.addEventListener('click', showLoginScreen);

