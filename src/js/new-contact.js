import { contactsDB, Contact } from "./data.js";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const birthday = document.getElementById("birthday").value;
  const favorite = document.getElementById("favorite").checked;
  const newContact = new Contact(
    name,
    email,
    phone,
    address,
    birthday,
    favorite,
  );
  contactsDB.push(newContact);
  localStorage.setItem("contactsDB", JSON.stringify(contactsDB));
  window.location.href = "../pages/contacts.html";
});
