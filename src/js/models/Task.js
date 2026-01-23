export default class Task {
  static PRIORITY_LOW = 1;
  static PRIORITY_MEDIUM = 2;
  static PRIORITY_HIGH = 3;

  constructor(title, priority, dueDate, complete = false) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.complete = complete;
  }
}
