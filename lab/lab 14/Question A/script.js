// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

// Add a new task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); // Trim to remove extra spaces
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  addTask(taskText);
  taskInput.value = ""; // Clear the input field
});

// Function to add a task
function addTask(taskText) {
  // Create list item
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  // Create task span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Add click event to mark task as completed
  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add click event to delete task
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  // Append task span and delete button to list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);

  // Append list item to the task list
  todoList.appendChild(listItem);
}
