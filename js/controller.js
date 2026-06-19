const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");

const pendingTodoArea = document.getElementById("pendingList");
const completedTodoArea = document.getElementById("completedList");

async function init() {
  const todosFromApi = await getTodos();

  setTodos(todosFromApi);
  renderTodos(getTodosFromState());
  
}

async function handleAddTodo(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();
  if (todoText === ""){
    return;
  } 

  const todoFromApi = await addTodo(todoText);

  const todoForPage = {
    ...todoFromApi,
    id: Date.now()
};
  addTodoToState(todoForPage);
  renderTodos(getTodosFromState());

  todoInput.value = "";
}

async function handleTodoClick(event) {
    const action = event.target.dataset.action;

    if (!action) {
    return;
    }

    const todoItem = event.target.closest(".todo-item");
    const todoId = Number(todoItem.dataset.id);

    if (action === "delete") {
        await deleteTodo(todoId);

        deleteTodoFromState(todoId);

        renderTodos(getTodosFromState());
  }

if (action === "toggle") {
    const currentTodo = getTodosFromState().find(function(todo) {
        return todo.id === todoId;
    });

    await updateTodo(todoId, {
        completed: !currentTodo.completed
    });

    toggleTodoInState(todoId);

    renderTodos(getTodosFromState());
    }

if (action === "edit") {
  const textSpan = todoItem.querySelector(".todo-text");
  const editButton = event.target;

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = textSpan.textContent;
  editInput.className = "edit-input";

  todoItem.replaceChild(editInput, textSpan);

  editButton.textContent = "Save";
  editButton.dataset.action = "save";

  editInput.focus();
}

if (action === "save") {
  const editInput = todoItem.querySelector(".edit-input");
  const newText = editInput.value.trim();

  if (newText === "") {
    return;
  }

  await updateTodo(todoId, {
    todo: newText
  });

  editTodoInState(todoId, newText);

  renderTodos(getTodosFromState());
}
  
}

todoForm.addEventListener("submit", handleAddTodo);
pendingTodoArea.addEventListener("click", handleTodoClick);
completedTodoArea.addEventListener("click", handleTodoClick);

init();