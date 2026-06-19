const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function renderTodos(todoArray) {
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  for (let todo of todoArray) {
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.dataset.id = todo.id;
    
    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = todo.todo;

    const buttonBox = document.createElement("div");
    buttonBox.className = "todo-actions";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    const toggleButton = document.createElement("button");
    toggleButton.textContent = todo.completed ? "Mark Pending" : "Complete";
    toggleButton.dataset.action = "toggle";

    buttonBox.appendChild(editButton);
    buttonBox.appendChild(deleteButton);
    buttonBox.appendChild(toggleButton);

    todoItem.appendChild(todoText);
    todoItem.appendChild(buttonBox);

    if (todo.completed) {
      completedList.appendChild(todoItem);
    } else {
      pendingList.appendChild(todoItem);
    }
  }
}