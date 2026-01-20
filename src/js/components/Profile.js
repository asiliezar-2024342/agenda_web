export class Profile extends HTMLElement {
  connectedCallback() {
    const initials = this.getAttribute("initials") || "N/A";

    this.innerHTML = `
        <section class="flex items-center justify-center relative bg-primary rounded-full p-2 size-24">
            <div class="z-10 text-black text-2xl font-bold">${initials}</div>
        </section>`;
  }
}
customElements.define("contact-profile", Profile);
