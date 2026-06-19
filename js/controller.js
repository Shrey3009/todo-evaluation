const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");

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

todoForm.addEventListener("submit", handleAddTodo);
init();