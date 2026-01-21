import { Profile } from "./Profile.js";
import { CallCard } from "./CallCard.js";
export class ContactCard extends HTMLElement {
  constructor(contact, initials) {
    super();
    this.contact = contact;
    this.initials = initials;
  }

  connectedCallback() {
    // Validar si se dio el valor en el constructor o en el atributo
    this.contact = this.contact ? this.contact : this.getAttribute("contact");
    this.initials = this.initials
      ? this.initials
      : this.getAttribute("initials");

    this.innerHTML = `
        <section class = "timeline-view animate-zoom-in animate-range-entry sm:animate-blurred-fade-in sm:animate-range-[entry_10%_contain_30%] shadow-xl p-4 sm:p-8 rounded-xl flex sm:flex-col gap-2 justify-between sm:justify-center items-center flex-row">
            <!-- PERFIL DEL CONTACTO -->
            <contact-profile initials="${this.initials}"></contact-profile>

            <!-- INFORMACION DEL CONTACTO -->
           <section class="flex flex-col gap-2 items-center justify-center">
                <h3 class="text-lg font-bold">${this.contact.name}</h3>
                <div class="flex items-center justify-center gap-2">
                    <svg class="text-button" width="20" height="20">
                        <use href="../assets/img/sprite.svg#email"></use>
                    </svg>
                    <span>${this.contact.email}</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg class="text-button" width="20" height="20">
                        <use href="../assets/img/sprite.svg#phone"></use>
                    </svg>
                    <span>${this.contact.phone}</span>
                </div>
           </section>

            <!-- ACCIONES DEL CONTACTO -->
            <section class="flex flex-col sm:flex-row items-center gap-2 text-button">
                <button id="button-call" class="action-button bg-emerald-300">
                    <svg width="20" height="20">
                        <use xlink:href="../assets/img/sprite.svg#phone" />
                    </svg>
                </button>
                <button id="button-detail-contact" class="action-button bg-button">
                    <svg width="20" height="20">
                        <use xlink:href="../assets/img/sprite.svg#detail" />
                    </svg>
                </button>
            </section>
        </section>`;

    const buttonCall = this.querySelector("#button-call");
    buttonCall.addEventListener("click", () => {
      this.callContact(this.contact, this.initials);
    });

    const buttonDetailContact = this.querySelector("#button-detail-contact");
    buttonDetailContact.addEventListener("click", () => {
      localStorage.setItem("contact", JSON.stringify(this.contact));
      window.location.href = `/pages/contact-details.html`;
    });
  }

  callContact(contact, initials) {
    const call = new CallCard(contact, initials);
    document.body.appendChild(call);
    call.show();
  }
}
customElements.define("contact-card", ContactCard);
