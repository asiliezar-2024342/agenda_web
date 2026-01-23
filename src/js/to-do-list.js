import TaskItem from "./components/TaskItem.js";
import Task from "./models/Task.js";
import { tasksDB } from "./data.js";

const taskInput = document.getElementById("task-input");
const taskPriority = document.getElementById("task-priority");
const taskDate = document.getElementById("task-date");
const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task");
const editTaskBtn = document.getElementById("edit-task");
const form = document.getElementById("task-form");
let oldTitle = "";

function renderTask() {
  taskList.innerHTML = "";

  // Ordenar de mayor a menor
  tasksDB.sort((a, b) => b.priority - a.priority);

  tasksDB.forEach((task) => {
    const taskItem = new TaskItem(task);
    taskList.appendChild(taskItem);
  });
}

// Listener para agregar una nueva tarea
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Si es del boton editar mandarlo al método editar
  if (!editTaskBtn.classList.contains("hidden")) {
    editTask();
    return;
  }
  // Válidar que el título no exista
  if (tasksDB.some((task) => task.title === taskInput.value)) {
    alert("La tarea ya existe.");
    return;
  }

  const task = new Task(
    taskInput.value,
    parseInt(taskPriority.value),
    taskDate.value,
  );
  tasksDB.push(task);
  localStorage.setItem("tasksDB", JSON.stringify(tasksDB));
  renderTask();
  form.reset();
});

// listener del evento perzonalizado para borrar
taskList.addEventListener("delete-task", (e) => {
  const title = e.detail.title;

  const index = tasksDB.findIndex((task) => task.title === title);

  if (index === -1) return;

  tasksDB.splice(index, 1);
  localStorage.setItem("tasksDB", JSON.stringify(tasksDB));
  renderTask();
});

renderTask();
//Listener personalizado para editar

function getLocalDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

taskList.addEventListener("edit-task", (e) => {
  const task = e.detail.task;

  taskInput.value = task.title;
  taskPriority.value = task.priority;
  taskDate.value = getLocalDate(task.dueDate);
  oldTitle = task.title;
  addTaskBtn.classList.add("hidden");
  editTaskBtn.classList.remove("hidden");
});

function editTask() {
  const index = tasksDB.findIndex((task) => task.title === oldTitle);

  if (index === -1) return;

  tasksDB[index].title = taskInput.value;
  tasksDB[index].priority = parseInt(taskPriority.value);
  tasksDB[index].dueDate = taskDate.value;
  localStorage.setItem("tasksDB", JSON.stringify(tasksDB));
  renderTask();
  form.reset();
  addTaskBtn.classList.remove("hidden");
  editTaskBtn.classList.add("hidden");
}
