import { Profile } from "./components/Profile.js";

const contact = JSON.parse(localStorage.getItem("contact"));

const nameContact = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const birthday = document.getElementById("birthday");
const favorite = document.getElementById("favorite");

nameContact.textContent = contact.name;
email.textContent = contact.email;
phone.textContent = contact.phone;
address.textContent = contact.location;
birthday.textContent = contact.birthday;
favorite.textContent = contact.isFavorite ? "Sí" : "No";

const headerProfile = document.getElementById("profile-header");

const parts = contact.name.split(" ");
const firstPart = parts[0].charAt(0).toUpperCase();
const secondPart = parts[1].charAt(0).toUpperCase() || "";

const profile = new Profile();
profile.setAttribute("initials", `${firstPart}${secondPart}`);
headerProfile.appendChild(profile);
