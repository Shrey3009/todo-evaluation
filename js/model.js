let todos = [];

function setTodos(todoArray) {
  todos = todoArray;
}

function getTodosFromState() {
  return todos;
}

function addTodoToState(todoItem) {
  todos = [todoItem, ...todos];
}