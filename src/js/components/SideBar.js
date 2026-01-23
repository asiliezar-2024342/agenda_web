export class SideBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <div id="sidebar-overlay" class="fixed inset-0 bg-black/50 z-40 hidden opacity-0 transition-opacity duration-300 sm:hidden"></div>

      <aside id="sidebar" class="fixed top-0 left-0 h-dvh w-16 bg-white border-r border-gray-200 flex flex-col justify-between items-center py-6 z-50 transform -translate-x-full transition-transform duration-300 sm:translate-x-0 shadow-lg sm:shadow-none">
        
        <nav class="flex flex-col gap-8 w-full items-center">
            
            <div class="mb-4">
               <svg class="size-8 text-prim"><use href="../assets/img/sprite.svg#logo"></use></svg>
            </div>

            <a href="../pages/contacts.html" title="Contactos" class="p-3 rounded-xl hover:bg-primary text-gray-500 hover:text-white transition-colors">
                <svg class="size-6"><use href="../assets/img/sprite.svg#user"></use></svg>
            </a>

            <a href="../pages/favorite-contacts.html" title="Favoritos" class="p-3 rounded-xl hover:bg-primary text-gray-500 hover:text-white transition-colors">
                <svg class="size-6"><use href="../assets/img/sprite.svg#star"></use></svg>
            </a>

            <a href="../pages/to-do-list.html" title="Tareas Pendientes" class="p-3 rounded-xl hover:bg-primary text-gray-500 hover:text-white transition-colors">
                <svg class="size-6"><use href="../assets/img/sprite.svg#tasks"></use></svg>
            </a>
        </nav>

        <div class="mb-2">
            <a href="../pages/user-profile.html" title="Mi Perfil" class="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
               <img src="../assets/img/user.avif" alt="Foto de perfil">
            </a>
        </div>
      </aside>

      <button id="btn-menu" class="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-xl sm:hidden hover:scale-105 transition-transform">
        <svg class="size-6"><use href="../assets/img/sprite.svg#menu"></use></svg>
      </button>
    `;
  }

  addEventListeners() {
    const sidebar = this.querySelector("#sidebar");
    const overlay = this.querySelector("#sidebar-overlay");
    const btnMenu = this.querySelector("#btn-menu");

    const toggleMenu = () => {
      const isClosed = sidebar.classList.contains("-translate-x-full");

      if (isClosed) {
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
        setTimeout(() => overlay.classList.remove("opacity-0"), 10);
      } else {
        sidebar.classList.add("-translate-x-full");
        overlay.classList.add("opacity-0");
        setTimeout(() => overlay.classList.add("hidden"), 300);
      }
    };

    btnMenu.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
  }
}

customElements.define("side-bar", SideBar);
