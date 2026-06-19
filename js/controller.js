async function init() {
  const todosFromApi = await getTodos();

  setTodos(todosFromApi);
  renderTodos(getTodosFromState());
  
}

init();