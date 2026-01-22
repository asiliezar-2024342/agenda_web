const userEmail = localStorage.getItem("email");

const name = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const username = document.getElementById("username");
const registrationDate = document.getElementById("registrationDate");

name.textContent = "Angel David";
lastName.textContent = "Siliezar López";
email.textContent = userEmail;
username.textContent = userEmail.split("@")[0];
registrationDate.textContent = new Date().toLocaleDateString();

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", logout);

function logout() {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/index.html";
}
