import { ContactCard } from "./components/ContactCard.js";
import { contactsDB } from "./data.js";

export function renderContact(contacts = contactsDB) {
  // Limpiar
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Recorrer la DB y crear el nodo de cada contacto
  contacts.forEach((contact) => {
    const parts = contact.name.split(" ");
    const initials =
      parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();

    main.appendChild(new ContactCard(contact, initials));
  });

  // Mostrar el total de contactos
  const totalContacts = document.querySelectorAll(".total-contacts");
  totalContacts.forEach((totalContact) => {
    totalContact.textContent = "Total de contactos: " + contacts.length;
  });
}

export function addContact() {
  window.location.href = "/pages/new-contact.html";
}

export function detailContact() {
  window.location.href = "/pages/detail-contact.html";
}
