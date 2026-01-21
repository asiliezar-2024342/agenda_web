import { contactsDB } from "./data.js";
import { ContactCard } from "./components/ContactCard.js";
// Si hay contactos en localStorage, usarlos, si no, usar los contactos de data.js
const favoriteContactsDB =
  JSON.parse(localStorage.getItem("contactsDB")) || contactsDB;

const favoriteContacts = favoriteContactsDB.filter(
  (contact) => contact.isFavorite,
);

function renderFavoriteContacts(contacts = favoriteContacts) {
  // Limpiar
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Recorrer la DB y crear el nodo de cada contacto
  contacts.forEach((contact) => {
    const parts = contact.name.split(" ");
    const firstInitial = parts[0].charAt(0).toUpperCase();
    const secondInitial = parts[1] ? parts[1].charAt(0).toUpperCase() : "";
    const initials = firstInitial + secondInitial;
    main.appendChild(new ContactCard(contact, initials));
  });

  // Actualizar el total de contactos
  const totalContacts = document.querySelectorAll(".total-contacts");
  totalContacts.forEach((totalContact) => {
    totalContact.textContent = `Total de contactos favoritos: ${contacts.length}`;
  });
}

search.addEventListener("input", () => {
  const searchValue = search.value.toLowerCase();
  // Sino buscó nada mostrar todos los contactos
  if (searchValue == null || searchValue.trim() == "") {
    renderFavoriteContacts();
    return;
  }

  // Validar si buscar con nombre o número
  const filteredContacts = contactsDB.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue) ||
      contact.phone.toLowerCase().includes(searchValue),
  );
  // Filtrar
  renderFavoriteContacts(filteredContacts);
});

renderFavoriteContacts();
