function getCallHTML(name, phone, initials) {
    return `
    <div class="z-50 relative" aria-labelledby="modal-title" role="dialog" aria-modal="true">
       
    <div class="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                
                <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm animate-bounce-in">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col items-center gap-6">
                        
                        <section class="flex items-center justify-center relative">
                            <div class="absolute bg-primary rounded-full p-2 animate-ping animate-iteration-count-infinite opacity-72 inset-0"></div>
                            <div class="z-10">${getProfileHTML(initials)}</div>
                        </section>

                        <section class="text-center">
                            <h3 class="text-2xl font-bold leading-6 text-gray-900">${name}</h3>
                            <p class="mt-2 text-sm text-gray-500 animate-pulse">Llamando al ${phone}...</p>
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
    </div>`;
}

function getContactHTML(contact) {
    let title = contact.name.charAt(0).toUpperCase() + contact.name.split(" ")[1].charAt(0).toUpperCase();
    return `
        <section class = "timeline-view animate-zoom-in animate-range-entry sm:animate-blurred-fade-in sm:animate-range-[entry_10%_contain_30%] shadow-xl p-4 sm:p-8 rounded-xl flex sm:flex-col gap-2 justify-between sm:justify-center items-center flex-row">
            ${getProfileHTML(title)}

           <section class="flex flex-col gap-2 items-center justify-center">
                <h3 class="text-lg font-bold">${contact.name}</h3>
                <div class="flex items-center justify-center gap-2">
                    <svg class="text-button" width="20" height="20">
                        <use href="../assets/img/sprite.svg#email"></use>
                    </svg>
                    <span>${contact.email}</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg class="text-button" width="20" height="20">
                        <use href="../assets/img/sprite.svg#phone"></use>
                    </svg>
                    <span>${contact.phone}</span>
                </div>
           </section>

            <section class="flex flex-col sm:flex-row items-center gap-2 text-button">
                <button class="button-call action-button bg-emerald-300">
                    <svg width="20" height="20">
                        <use xlink:href="../assets/img/sprite.svg#phone" />
                    </svg>
                </button>
                <button class="button-detail-contact action-button bg-button">
                    <svg width="20" height="20">
                        <use xlink:href="../assets/img/sprite.svg#detail" />
                    </svg>
                </button>
            </section>
        </section>`;
}

function getProfileHTML(title) {
    return `
    <div class="profile">
        <span class="font-bold">${title}</span>
    </div>
    `;
}


function openCall(name, phone) {
    const parts = name.split(" ");
    const initials = parts[0].charAt(0).toUpperCase() + (parts[1] ? parts[1].charAt(0).toUpperCase() : "");

    const callContainer = document.createElement("dialog");
    callContainer.innerHTML = getCallHTML(name, phone, initials);
    document.body.appendChild(callContainer);

    const btnReject = callContainer.querySelector("#btn-reject");
    btnReject.addEventListener("click", () => {
        callContainer.close();
        ringtone.pause();
        document.body.removeChild(callContainer);
    });

    const ringtone = new Audio("../assets/audio/call.mp3");
    ringtone.play();

    ringtone.addEventListener("ended", () => {
        callContainer.close();
        document.body.removeChild(callContainer);
    });

    callContainer.showModal();
}

export function createContactNode(contact) {
    const node = document.createElement("div");
    node.innerHTML = getContactHTML(contact);

    const buttonCall = node.querySelector(".button-call");
    buttonCall.addEventListener("click", () => {
        openCall(contact.name, contact.phone);
    });

    return node;
}