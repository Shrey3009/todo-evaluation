const STORAGE_KEY = "todo_app_items";
let todos = [];

function setTodos(todoArray) {
  todos = todoArray;
}

function getTodosFromState() {
  return todos;
}

function addTodoToState(todoItem) {
  todos = [todoItem, ...todos];
  saveTodosToStorage();
}

function deleteTodoFromState(id) {
    todos = todos.filter(function(todo){
        return todo.id !== id;
    });
    saveTodosToStorage();
}

function toggleTodoInState(id) {
  const selectedTodo = todos.find(function(todo) {
    return todo.id === id;
  });

  if (!selectedTodo) {
    return;
  }

  const updatedTodo = {
    ...selectedTodo,
    completed: !selectedTodo.completed
  };

  const remainingTodos = todos.filter(function(todo) {
    return todo.id !== id;
  });

  todos = [updatedTodo, ...remainingTodos];
  saveTodosToStorage();
}

function editTodoInState(id, newText) {
  todos = todos.map(function(todo) {
    if (todo.id === id) {
      return {
        ...todo,
        todo: newText
      };
    }

    return todo;
  });
  saveTodosToStorage();
}

function saveTodosToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodosFromStorage() {
  const savedTodos = localStorage.getItem(STORAGE_KEY);

  if (savedTodos === null) {
    return null;
  }

  return JSON.parse(savedTodos);
}