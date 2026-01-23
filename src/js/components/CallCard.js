export class CallCard extends HTMLElement {
  #ringtone = new Audio("../assets/audio/call.aac");

  constructor(contact, initials) {
    super();
    this.contact = this.getAttribute("contact") || contact;
    this.initials = this.getAttribute("initials") || initials;
  }

  connectedCallback() {
    this.innerHTML = `
    <dialog class="z-50 relative" aria-labelledby="modal-title" role="dialog" aria-modal="true">
       
    <div class="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                
                <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm animate-bounce-in">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col items-center gap-6">
                        
                        <section class="flex items-center justify-center relative">
                            <div class="absolute bg-primary rounded-full p-2 animate-ping animate-iteration-count-infinite opacity-72 inset-0"></div>
                            <contact-profile initials="${this.initials}"></contact-profile>
                        </section>

                        <section class="text-center">
                            <h3 class="text-2xl font-bold leading-6 text-gray-900">${this.contact.name}</h3>
                            <p class="mt-2 text-sm text-gray-500 animate-pulse">Llamando al ${this.contact.phone}...</p>
                        </section>

                        <section class="flex gap-8 mt-4">
                            <button id="btn-reject" class="group rounded-full bg-red-100 p-4 hover:bg-red-500 transition-colors duration-300 cursor-pointer animate-float animate-iteration-count-infinite">
                                <svg class="w-8 h-8 text-red-600 group-hover:text-white transition-colors rotate-135"><use xlink:href="../assets/img/sprite.svg#phone"></use></svg>
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </dialog>`;

    const btnReject = this.querySelector("#btn-reject");
    btnReject.addEventListener("click", () => {
      this.close();
      this.#ringtone.pause();
    });

    this.#ringtone.addEventListener("ended", () => {
      this.close();
    });
  }

  show() {
    this.querySelector("dialog").showModal();
    this.#ringtone.play();
  }

  close() {
    this.querySelector("dialog").close();
    this.#ringtone.pause();
    document.body.removeChild(this);
  }
}

customElements.define("call-card", CallCard);
