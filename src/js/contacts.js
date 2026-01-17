import { createContactNode } from "./components/call.js";
import { contactsDB } from "./data.js";

export function renderContact(contacts = contactsDB) {
    // Limpiar
    const main = document.querySelector("main");
    main.innerHTML = "";

    // Recorrer la DB y crear el nodo de cada contacto
    contacts.forEach(contact => {
        main.appendChild(createContactNode(contact));
    });

    // Mostrar el total de contactos
    const totalContacts = document.querySelectorAll(".total-contacts");
    totalContacts.forEach(totalContact => {
        totalContact.textContent = "Total de contactos: " + contacts.length;
    });
}

export function addContact() {
    window.location.href = "/pages/new-contact.html";
}

export function detailContact() {
    window.location.href = "/pages/detail-contact.html";
}
