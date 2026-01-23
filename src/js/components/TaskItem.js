import Task from "../models/Task.js";

export default class TaskItem extends HTMLElement {
  constructor(task) {
    super();
    this.task = task;
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  #getPriorityTag() {
    const priority = this.task.priority;
    let bgColor = "";
    let text = "";

    switch (priority) {
      case Task.PRIORITY_LOW:
        bgColor = "bg-blue-500";
        text = "Baja";
        break;
      case Task.PRIORITY_MEDIUM:
        bgColor = "bg-yellow-500";
        text = "Media";
        break;
      case Task.PRIORITY_HIGH:
        bgColor = "bg-red-500";
        text = "Alta";
        break;
    }

    if (this.task.complete) {
      bgColor = "bg-green-500";
      text = "Completada";
    }

    return `<span class="pointer-events-none ${bgColor} text-white px-2 rounded-md" title="Prioridad">${text}</span>`;
  }

  render() {
    const priority = this.#getPriorityTag();
    this.innerHTML = `
      <li class="task-item border border-primary rounded-md p-2 flex justify-between items-center">
       <div>
       <div class="flex gap-2 w-full">
        <input type="checkbox" class="p-1.5 cursor-pointer rounded-full accent-primary hover:accent-button" ${this.task.complete ? "checked" : ""} id="${this.task.title}">
        <label for="${this.task.title}">${this.task.title}</label>
       </div>
      <span class="text-sm text-button">Vencimiento: ${new Date(this.task.dueDate).toLocaleDateString()}</span>
       </div>
       <div class="flex gap-2">
          ${priority}
          <button id="edit-task" class="cursor-pointer bg-button hover:bg-button/80 text-white px-2 rounded-md">Editar</button>
          <button id="delete-task" class="cursor-pointer bg-red-500 hover:bg-red-500/80 text-white px-2 rounded-md">Eliminar</button>
        </div>
      </li>
    `;
  }

  setupListeners() {
    const editTask = this.querySelector("#edit-task");
    const deleteTask = this.querySelector("#delete-task");
    const checkbox = this.querySelector("input[type='checkbox']");

    editTask.addEventListener("click", this.editTask.bind(this));
    deleteTask.addEventListener("click", this.deleteTask.bind(this));
    checkbox.addEventListener("change", this.toggleTask.bind(this));
  }

  editTask() {
    const event = new CustomEvent("edit-task", {
      bubbles: true,
      detail: {
        task: this.task,
      },
    });
    this.dispatchEvent(event);
  }

  deleteTask() {
    const event = new CustomEvent("delete-task", {
      bubbles: true,
      detail: {
        title: this.task.title,
      },
    });
    this.dispatchEvent(event);
  }

  toggleTask() {
    const event = new CustomEvent("toggle-task", {
      bubbles: true,
      detail: {
        title: this.task.title,
      },
    });
    this.dispatchEvent(event);
  }
}
customElements.define("task-item", TaskItem);
